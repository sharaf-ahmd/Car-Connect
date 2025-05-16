const Service = require('../../models/CarWashModel/serviceModel');
const ErrorHandler = require('../../utils/CarWashUtils/errorHandler');
const catchAsyncError = require('../../middlewares/CarWashMiddlewares/catchAsyncError');
const APIFeatures = require('../../utils/CarWashUtils/apiFeatures');

// Get all services - /api/v1/services
exports.getServices = async (req, res, next) => {
    const resPerPage = 4; // You can adjust the number of services per page
    

    let buildQuery = () => {
        return new APIFeatures(Service.find(), req.query)
        .search()
        .filter()
    }

    const filteredServicesCount = await buildQuery().query.countDocuments({})

    const totalServicesCount = await Service.countDocuments({})

    let servicesCount = totalServicesCount;

    if(filteredServicesCount !== totalServicesCount){
        servicesCount = filteredServicesCount;
    }

    const services = await buildQuery().paginate(resPerPage).query;

    res.status(200).json({
        success: true,
        count: servicesCount,
        resPerPage,
        services
    });
};

// Create a new service - /api/v1/service/new
exports.newService = catchAsyncError(async (req, res, next) => {
    let imageUrl = "";
    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
        BASE_URL = `${req.protocol}://${req.get('host')}`;
    }

    // If one image is uploaded
    if (req.file) {
        imageUrl = `${process.env.BACKEND_URL}/uploads/service/${req.file.originalname}`;
        req.body.image = imageUrl; // Assuming your model has a field called `image`
    }

    req.body.user = req.user.id;
    const service = await Service.create(req.body);

    res.status(201).json({
        success: true,
        service
    });
});

// Get a single service by ID - /api/v1/service/:id
exports.getSingleService = catchAsyncError(async (req, res, next) => {
    const service = await Service.findById(req.params.id);

    if (!service) {
        return next(new ErrorHandler('Service not found!', 400)); // Return a 404 error if service is not found
    }

    await new Promise(resolve=>setTimeout(resolve, 1000))
    res.status(200).json({
        success: true,
        service
    });
});

// Update service - /api/v1/service/:id
exports.updateService = catchAsyncError(async (req, res, next) => {
    let service = await Service.findById(req.params.id);

    if (!service) {
        return res.status(404).json({
            success: false,
            message: "Service not found!" // Return a 404 error if service is not found
        });
    }

    // Update the service with the new data from the request body
    service = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true // Ensure the validators are run when updating the document
    });

    res.status(200).json({
        success: true,
        service
    });
});

// Delete service - /api/v1/service/:id
exports.deleteService = catchAsyncError(async (req, res, next) => {
    const service = await Service.findById(req.params.id);

    if (!service) {
        return res.status(404).json({
            success: false,
            message: "Service not found!" // Return a 404 error if service is not found
        });
    }

    // Delete the service
    await service.deleteOne();

    res.status(200).json({
        success: true,
        message: "Service deleted!" // Success message after deletion
    });
});
exports.getAdminServices = catchAsyncError(async (req, res, next) =>{
    const services = await Service.find();
    res.status(200).send({
        success: true,
        services
    })
});
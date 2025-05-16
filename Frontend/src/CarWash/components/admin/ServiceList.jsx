import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import { toast } from "react-toastify";
import { CSVLink } from "react-csv";

import Sidebar from "./Sidebar";
import Loader from "../layouts/Loader";
import { getAdminServices } from "../../actions/serviceActions";
import { clearError } from "../../slices/servicesSlice";

export default function ServiceList() {
  const dispatch = useDispatch();

  const { services = [], loading = true, error } = useSelector(
    (state) => state.servicesState
  );

  useEffect(() => {
    if (error) {
      toast(error, {
        position: "top-center",
        type: "error",
        onOpen: () => dispatch(clearError()),
      });
      return;
    }
    dispatch(getAdminServices());
  }, [dispatch, error]);

  const setServices = () => {
    const data = {
      columns: [
        { label: "ID", field: "id", sort: "asc" },
        { label: "Name", field: "name", sort: "asc" },
        { label: "Price", field: "price", sort: "asc" },
        { label: "Category", field: "category", sort: "asc" },
        { label: "Actions", field: "actions" },
      ],
      rows: [],
    };

    services.forEach((service) => {
      data.rows.push({
        id: service._id,
        name: service.name,
        price: `LKR ${service.price}`,
        category: service.category,
        actions: (
          <Link
            to={`/admin/service/ahamed/${service._id}`}
            className="btn btn-primary btn-sm me-2"
          >
            <i className="fa fa-pencil"></i>
          </Link>
        ),
      });
    });

    return data;
  };

  const csvData = services.map((service) => ({
    ID: service._id,
    Name: service.name,
    Price: service.price,
    Category: service.category,
  }));

  return (
    <div className="row">
      <style>{`
        .service-list-container {
          padding: 2rem;
          background-color: #f4f6f9;
          min-height: 100vh;
        }

        .service-header {
          font-size: 2rem;
          font-weight: 600;
          color: #232f3e;
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .csv-button {
          display: inline-flex;
          align-items: center;
          background-color: #28a745;
          border: none;
          color: white;
          padding: 0.5rem 1rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .csv-button:hover {
          background-color: #218838;
          text-decoration: none;
          color: white;
        }

        .fa-download {
          margin-right: 0.5rem;
        }

        .px-3 {
          background-color: #fff;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
        }
          .px-3 td {
  color: #000 !important;
}

        .dataTables_wrapper .dataTables_filter input {
          border-radius: 5px;
          padding: 0.4rem;
          border: 1px solid #ced4da;
        }

        .dataTables_wrapper .dataTables_length select {
          border-radius: 5px;
          padding: 0.3rem;
          border: 1px solid #ced4da;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button {
          margin: 0 2px;
          padding: 0.4rem 0.6rem;
          border-radius: 5px;
          background-color: #dc323f;
          color: white !important;
          border: none;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button.current {
          background-color: #a2202b !important;
        }
      `}</style>

      <div className="col-12 col-md-2">
        <Sidebar />
      </div>

      <div className="col-12 col-md-10 service-list-container">
        <h1 className="service-header">
          Service List
          {!loading && services.length > 0 && (
            <CSVLink
              data={csvData}
              filename={"services-report.csv"}
              className="csv-button"
            >
              <i className="fa fa-download"></i> Generate CSV
            </CSVLink>
          )}
        </h1>

        <Fragment>
          {loading ? (
            <Loader />
          ) : (
            <MDBDataTable
              data={setServices()}
              bordered
              striped
              hover
              className="px-3"
            />
          )}
        </Fragment>
      </div>
    </div>
  );
}


const axios=require('axios')

exports.getDistance = async (req, res) => {
    const { origin, destination } = req.body;
    const apiKey = "AIzaSyBSAoG50gAA20WCzzWd7tDsaulIHthGfII";

    try {
        const response = await axios.get("https://maps.googleapis.com/maps/api/distancematrix/json", {
            params: {
                origins: origin,
                destinations: destination,
                key: apiKey,
            },
        });

        const element = response.data.rows[0].elements[0];
        if (element.status === "OK") {
            const distanceInKm = element.distance.value / 1000;
            res.json({ success: true, distance: distanceInKm });
        } else {
            res.status(400).json({ success: false, message: "Invalid locations" });
        }
    } catch (error) {
        console.error("Google Maps API error:", error);
        res.status(500).json({ success: false, message: "Failed to fetch distance" });
    }
};
export default {
    data: {
        reviews: [
            {
                id: 1,
                productName: "IPhone 14",
                summary: "This is a summary of IPhone 14.",
                detail: "This is a detailed review of IPhone 14."
            },
            {
                id: 2,
                productName: "Samsung Galaxy S23",
                summary: "This is a summary of Samsung Galaxy S23.",
                detail: "This is a detailed review of Samsung Galaxy S23"
            }
            // more review objects...
        ],
        dashboard: {
            totalReviews: 0,
            positiveReviews: 0,
            negativeReviews: 0
        }
    }
}
        
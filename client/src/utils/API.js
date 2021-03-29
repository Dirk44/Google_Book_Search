import axios from "axios";


export default { 
    get: async function() {
        const res = await axios({
            method: "get",
            url: "/api/books"
        });
        return(res);
    },
    post: async function(data) {
        const res = await axios({
            method: "post",
            url: "/api/books",
            data: data
        });
        return(res);
    },
    delete: async function(data) {
        const res = await axios({
            method: "delete",
            url: "/api/books" + data,
        });
        return(res);
    },
    search: async function(data) {
        const res = await axios({
            method: "get",
            url: "https://www.googleapis.com/books/v1/volumes?q=" + data,
        });
        const array = [];
        res.data.items.forEach(element => {
            array.push({
                id: element.id, 
                title: element.volumeInfo.title,
                authors: element.volumeInfo.authors ?? ["No authors on file"],
                description: element.volumeInfo.description,
                image: element.volumeInfo.imageLinks?.smallThumbnail ?? "https://via.placeholder.com/150",
                link: element.volumeInfo.infoLink
            });
            // array.push({
            //     id: element.id, 
            //     title: element.volumeInfo.title,
            //     authors: element.volumeInfo.authors,
            //     desription: element.volumeInfo.desription,
            //     image: element.volumeInfo.imageLinks.smallThumbnail,
            //     link: element.volumeInfo.infoLink
            // });
        });
        return(array);
    }
}
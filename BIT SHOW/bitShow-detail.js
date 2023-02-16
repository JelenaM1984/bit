$(document).ready( function (event) {
    fetchShowInfo();
})

function fetchShowInfo() {
    const id = sessionStorage.getItem("movieId");
    $.ajax({
        method: "GET",
        url: `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
    })
        .done(res => {
            const imageSrc = res.image
                ? res.image.original
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";
            const show = new Show(res.id, res.name, imageSrc);
            show.summary = res.summary;
            res._embedded.seasons.forEach(({ premiereDate, endDate }) => {
                const seasonString = (premiereDate && endDate)
                    ? `${premiereDate} - ${endDate}`
                    : "Data Not Available";
                show.seasons.push(seasonString);
            });
            res._embedded.cast.forEach(({ person }) => {
                show.cast.push(person.name);
            });

            console.log(show);
            return show;
        })
        .fail(() => {
            const err = "Network problem, try again later."
            console.log(err);
        });
}

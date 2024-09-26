var cl = console.log;

const showModelBtn = document.getElementById('showModelBtn');
const backDrop = document.getElementById('backDrop');
const movieModel = document.getElementById('movieModel');
const closeModal = [...document.querySelectorAll('.closeModal')];
const movieCardContainer = document.getElementById('movieCardContainer')

const movieForm = document.getElementById('movieForm');
const movieTitleControl = document.getElementById('movieTitle');
const movieUrlControl = document.getElementById('movieUrl');
const overviewControl = document.getElementById('overview');
const ratingControl = document.getElementById('rating');
const submitBtn = document.getElementById('submitBtn');
const updateBtn = document.getElementById('updateBtn');

const uuid = () =>{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() *16 | 0, v = c == 'x' ? r :(r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let movieArr = [
    {
        movietitle: "The Dark Knight Rises",
        overview: " Eight years after the events of The Dark Knight, the terrorist Bane forces Wayne to resume his role as Batman and save Gotham City from nuclear destruction.",
        rating: 1,
        movieId : '1',
        movieUrl: "data:image/webp;base64,UklGRm4QAABXRUJQVlA4IGIQAADQPACdASq4AGoAPuk4ul0pIikpFzEgHQlL7UrU2+VuyuOU/H8M93CtnuPP63wl8uoRdp32/zyf4HfvwCHd9ojf74RcgXgPHh+/Z+5KDVHHfuymegY74L/vNS0AFhtLLlYrgzKDh/mrkQGHdvUCgTI+LbwYNE/7vIcdR9I02MNXiens5z2VchfE0kltkdz2ww0vrtdT4N98S8LC/gtd0QQ+HBD6HXeMdYmkqsKsjvOvepofHaeA9VxhfBmDnKHHC2LFBp4jPI/Q3YAprTu+9OjPdrj5U3nHi06VUc0DwMLP+Fu5GuXzx3QBPXzvX9lsvJOabRZji+7aadiS+qPHNM+fxAs1BGoJBnqA2X5JcxSF7qzE7Pey0pgIhfneJMb/Ad9y1ZoPgU+vTY2Up+4YANJ82bUYdnt32wo80sKGzvjtCZSgc5j9k6x1K0FZ4tYccvhDkY0ehxt0+Y11d8T70alQm6vQqLuMgDYyY7wwu9DFt6SzTKPNqf/5806sYqqibkeTEox7wN/AhGLEMbVz1cuOJKG+58rJE5Vjbv3OjbY3C0vUVIbbhRJls+mdbm02wLsxKEcCPcmPS/7Lzkv4CX/ptlQSNlXYhEX8ZmNfSwzPebnuq7Z3XBATa37Jsy8NlrhA86b547o7lq6n5W6gYgAA/vs1zYbrOCIxu7XPE247KCr2M3fIxt5JvZecGXt5SfN6ErYLkBiKcAV5CTPJTJIDb3dPTdWwPGYgZi70qUIiZyBstpdLBh6dv18OgDVApEFYYGBaOC/Gl2PA6xeAttp31NwaOyngtVHUNWIJQ3m08tEcsUTrqH82KdKaI3poz1QAAu0gQ6KTwBodvurM/5WoWjTzAuZOY7MJYckKcWAVaquTkq1SP2OLi5B+F14XHJJ0hpQe79ZaOC4+Nm8MdLYuRwkshEBTxdWkYWy1FSASKLBPve5HOj4367R6/dHwzxjDugHS6HF2My4xG1+VEZyHxlfnACSpC/z4SmsAD7Kc5VavofQijZJJZyMxsP1fDFSCX92Cz73sc9o/8svR/T8dzOoP/C4unogsFVfn2/GcasFaAq81T+9VggJOwFuRs0J99lnptFPkFbNN9kFDtdDm091b+rdH0IxSjnm5DhWGlJeemRlA6EV5xCqypgmtBwZw6k32knMXlSoWbCoi6x/SdiqQe+FZSHxVhbP8Ybc5OyUYK/MnU+8iBP3ivBtAoBdipddArP1uxIVRk+Ie6TnEm0OroImwj8pilGbH7qv0Y/lxi2QTil9D5Zq+cdL73FXpdD/gyftTM32i8eph4Pllmbg5h9095lfd4OZOClz2yEtHfV6OdxQLmFyLIQNiX5sVnhXjZqf4oLigWyYHBXkMK1xxSpy3QZBL7B20gofFlezNomJHx1EiOlSofbd1Ye++tcVZDjexc59RhUxnIVa82pgddE5LroQdTApRkfnOIiQc40IChT26qLrNZyS8auDV1S+n+3UHaPB9iADkbXHH5bH2bD+y+n9WocGrF6sAeEuDMkp7eHY7agg/ruUcA/6xckJxFJ037urvt2ICqD7INE23QCJK6j0M5XBZAEiPd/L5H7vvsyn385LSQFjhelXtYAj3WVOrExwBILo+EvqGJzwoNacFEL94c3aM40c6aLnmubTrKjMhb+M9mwpUD2ssh0dR0pbVWdq1GmmYJWHWI08BL7Ll1U1a20/ixOzFAuF4ruR5EU+9kQD+qFp6S5PeN1z6h37Urj+30YvHPIubl0X25XHsXSMdUAd6I0fKwvg+q3ZLaKy0/AJVl8x5ELW55EEs9Va5Q36WuhP9bqvE42J+aWjK/9ap4cCsXXcKMmFYHjy4c8R2ZAGnigl+gYPkirJawlONRbgwadKr+uWVjIOyiTrvKoGrEH0ZRDiyUkReeyIXpXweYOGMiWRfhD+Yqima2UTvYH3MSONVIJB0S5ErJwgUDfleIGIkCnJFLmlICLj9mGfn39NjsUdRG2a6u8aN0fA8syJNneQb7Acz6r8jJ6ZZ8p9HD1sfEafh76nBzuvD9GJepxPJxcwc8wdkMxN1EThou+JvJl8RPjH8HMYYwMixbqvhVkk6/AN2MWXRA8SP4GOBYwD0nxtDYCq/2M5NxA65HS2eFQQjhPbLplKLJga+bmZu9mPoh1S7Tkh5gaA2tWrBgOSSJYdUcCFw4Hh7Aixp7RFm0w1c3exFTNuPkKrcM/Sc0cfc+qI1FAiddPko0VqEziPsX+HHmkZhi243zEvUEOQSHo5kytWgf8n0w5Jl0pApul+Hph7CjGyDWrhKT5aGyIT0mAiuQRLGwsSFi0Dbys+j+wV8raFpFQ1Nj3y5GBF7AU7rFRTASromaE5HcVlP+uNtWAwqPjFvbSQMloklinYJ0gZexbzBYIn/GvAXxFRf/LVr/E7xx4TRinh4wyzlIRdp7OK9YWuEaOMA6hlxY1Eg3czux6sAhlzD03E6oCiHoqlr9zJr8AY4/A/nlsM4/xLVbA5i30SITQuqZZ/+W2BG8YeqffEGbMOFsKzo5GIlmCDZOif8N2/wYhbWhX7Z+IgiDCtRHVC0WaXxf6Q42nrPNPF2mo9mWLefkeKVrFotFVCiI6d8Lbc7vZDOUKfbenQr4J2o3MgnSblsZg/nRmLcwafSwGVOj6O9sH5QLZiNkGfDY9SF5ifXpELlGyqKtwFq/wi+CJHzrv69ctTxibyCQc6g2L0CYDm7XT2TX+RKOMz/i7LALPdyjpdA+QAyqYpVI21oYosCtEHQkG8Uws5TG/sRZa7fVi0caf9WcNN8ztKpkBGdoNAeuQELDYFqDAA9lVvTqoYnbhbYikcPe7zAzTReG+g4AMw+V89MoqKNS6n7hgfv9CbIgxMWGKwhaV3zhmHPsGSMr+JPmeylAv+BHaooHIfVvzFz9lE4koyZEuqDsUPu3/fDBU6YF0UFUsSo2d89kS5cFdcvj0x1u6SsUyPVBDHeEDIS3eITWzgeNZVzZRVxhoKdQlL5NqCamLrQxwYjOWAGsdSmK5zQoIM3m1paNLf/89owBoaopJ1dWRDTF4csQLPHs4Gx/rkb9Ht4F36hSB4yNcXluU3vdOCLRoGBvpGw5zHKBvbVuMfXczo0E8vS7dLcdsyWiqzNZKZskLZzGNrwyltVwOk3MYCHncYOy5Pqited9B//x/p3Lp1vvusP7YqRFPkcI/EU/9u66rxfpcQ0/VirPlt2rK2M9Bqyo+rCGVj6JIS4BBDYh+2DFYmGHfV5+2c+nGIoQkgeAfywposTgaKUVWWqGiPsO8ec1ZaEiDmRvQrwjjUwibTBroflMb6M2GduMsmmJ0xeMPgfoIENaYhD71mI10vXzgqkLVLcoBecIBmtbW0F432zlaf1MdaJj5Ef8a3ldcyRbfI73ny2qzrTdfUtyJpLqD1J4/DsCG9Kuft4BRPox7PPXrzX0B2i78XHh8BKFErcjNNwOj5cb5cNAGUsm2sgO51vll14NmVkHFi7Pgt/caHhzeZvyoVO2Bo9rejkDfYo8ptEK2Ofg95EAxz85go8lROq8Oj1JB1bHPaUgFKH+7wVak0uEXrVY6Ndv+v+UgLmxYuMrBFFwSE3dx8+0+cbfAUDghEAh/3rrUMYAmXwactcGyMugj9mSzUeQdGo/ZsGdWU8UA+0YTJVbOS2dlX5dpsSoCL/7j2yZHInxGitRiPy+8EmLJ8++XyoKVKELYIIeIWX6FBqMECauBSPuTg6QCfWwBNASQvfn7lbTbOf2sWhjdwOaUTeQirvyLGDr+Q3irME063mkZ9aIhmANl0/rJTjFtbKYumJtqI8Nd5pPcAHDdBbb+dTv67dVMXRJq14rblU67ntvAyiEN9qD33HjpbU1MmOF63D0dSsXMG64IOnka1MekTf7X4ikGRhdRhDESMVI8hfl5Oq/eDbaFgmrrxlY1X7zQIiS/XVc3lIDgnGshKM6Vr46stO502pRz5b1iFNKOTr/oUTNZVJ86M3V6/UmraP3jMADmcqIgFVMlPkAlTFo2eaHjr0d1kz4inN6nMOge/IX6uUylX9UL5kMGX4YMM/SQXJYzpnkh8Z8S8uxLmV5FhQQKdIeNOaa0QyrnpJZvgYUlc7umxibDtQc+6HJuHtd4KaFAftQhW+iXkaFhf3wOg3yV0qCfV6JJFwPYfsQtff8Sjs0J9YeU86J4mwIvCCLtjCPbTItFp95087B9ebMVeznsZ0kO38WjeFBgqPU2tqbeOB4qU4djOkNMN4QKF8t2hHtxr9nNoMq6tyNhjlUHunFJJYkkbBaWAurqASUe6F/e56LJW0dm/mZEuph+TurlYa61cxpZYqmwHkeypum/PDGKE3yV6BDYLebSxzxFuvUQjWvmRPcw1Pp/XFY8ih5QrLqS25Iraqdu9ixletmftGBFRTS0gHhr8TJWgRWzSmsQBGWHlvILfGXuXsTvRyZisv5lW6lHN2fmagAdW4fNpUDuZHM/UKdJb1F5PqmJlYqZT4wUr2LmKE+xyZFjdvsz3u2pF3jiHPlC1issfhoLoRzamtnJQSFniC0jPAzAsA9C9B/EtrtigxXYus6jVsno5f8X0xx9qtpG5vAt+39wvmiygEOnOz54U8HmgK51QW0w69yvoFxMeOviuAnO+nCsEx0OV6fKZwBAcuAZ4skiiit2vOygppEWAv1zNJHQ8YdaVGvrVH2cQgMDSOIXPwCBXlm8y6VYsChoGy9I8QSllrBikTQQl+E7XZ0xaXkxbd0UVSB8ma968qavsFY/o+OgJ6X9adbXj19+++Hw9VVAAUb8QJ2U3ZB92j8ZJwsEl7pUkDda/K2PgLCyP8JRKDLsYHBN2Aq8U0yqYa5jwV3wJMBI420TvUGtGiTVUFZxveDr4ZmJ8YuQt2spozz3LPTO8ejCHv0PUP618H15oKnM7zP1NwNbPjvM8eRDtaLpcNfWNRLQJZBhhQHBu29J3hQ5riUBJx1QV5MXkGyPWNorIoOljOwK9euGtXvbfvHVWyMxvfQeSGzPwM7RBy7ODQ9fJdIwk//wg7ERI4q2Q3ZZflckVLtHbL9e/MbiVahIz7MrHRMxOUXP/VqZ8uwfFscdCTBK1PTfUKKCrjtN5CDOuvYeRkqojnZEqY6cv5yQIFfzp3nRcTGhQB0S9tv2I9SIsJeoDQLwqwG1bLm24rVEgyWDtgc+jL/vWlm3isYgQgT53DDvtpeuZ+oQa9L3eoBjvUptXuWC+Izn0mscMG1P8T4WqEv2q3McO3Nkp4S3NoDBeX/V+v58LDxKMCN3Yohvb2r58qpOy2tL8tqKtsP0j88QhPuQ32JsfFac0KhvapBz3Hi7jO5/HYn5p/4zRhueBck2BRSRVhCwuWv3wNWQ8C7nZJPNikrLSgWzRjBxwdqR4axlcUaPDO28berH28vMoyV+hfkhyMSFRRsfMWG34KFuYs/6NDheKAnogalo36nV2Z0x4pW4yR0tIczZ5e8sjDYqBtPBCphNufgqmoiiaJ1aw7pb9N2fb9OCNmIW50maUxo633DTcu3lPEDRVF+JzWmC1QpuHG7D1eQInYc/vR1FGTRSYFhS8e4bTTrzDcV6+i4Ij1pg9RTwN5gJXAAAA="
    },
    {
        movietitle: "Rocket Singh: Salesman of the Year",
        overview: " Eight years after the events of The Dark Knight, the terrorist Bane forces Wayne to resume his role as Batman and save Gotham City from nuclear destruction.",
        rating: 1,
        movieId : '2',
        movieUrl: "data:image/webp;base64,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"
    }
];

const snackBar = (swalTitle, icon) => {  
    Swal.fire({
     title : swalTitle,
     icon : icon,
     timer: 2000,
     confirmButtonColor : '#161515aa'
    })
 }
 

let editId ;
const onEdit = (ele) => {
    MovieModelHandler()
   editId = ele.closest('.card').id;
    let editObj = movieArr.find(movie => movie.movieId === editId);
    movieTitleControl.value = editObj.movietitle;
    movieUrlControl.value = editObj.movieUrl;
    overviewControl.value = editObj.overview;
    ratingControl.value = editObj.rating;

    updateBtn.classList.remove('d-none');
    submitBtn.classList.add('d-none')

}

const onRemove = (ele) => {
    Swal.fire({
        title: "Are you sure, you want to remove this movie?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#161515aa",
        cancelButtonColor: "#c11119",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            let removeId = ele.closest('.card').id;
            let getIndex = movieArr.findIndex(movie => movie.movieId === removeId);
            movieArr.splice(getIndex, 1);
            ele.closest('.col-md-6').remove();
         snackBar(`The movie is deleted successfully!!!`, `success`);
        }
      });
    
}

const createMovieCards = (arr) => {
    let movieCardsResult = ``;

arr.forEach(movie => {
    movieCardsResult += `
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card h-100 movieCard" id="${movie.movieId}">
                    <div class="card-header movie-h">
                        <h3 class='mb-0 movieTitle'>${movie.movietitle}</h3>
                    </div>
                    <div class="card-body cardbody-bg">
                        <figure class='mb-0'>
                            <img class="w-100"
                            src="${movie.movieUrl}" alt="">
                            <figcaption class='mb-0'>
                             <div class="movietitle">
                                                 <div class="row">
                                                     <div class="col-10">
                                                         <h4 class ='h4'>
                                                             ${movie.movietitle}
                                                         </h4>
                                                     </div>
                                                     <div class="col-2 rating text-center align-self-center">
                                                         <span class="${setClassRating(movie.rating )}">
                                                             ${movie.rating}
                                                         </span>
                                                     </div>
                                                 </div> 
                                             </div>                 
                      <p class='movieOverview'>     
                      ${movie.overview}
                      </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card-footer moviefooter d-flex justify-content-between">
                        <button class="btn btn-sm btn-info" onClick='onEdit(this)'>Edit</button>
                        <button class="btn btn-sm btn-danger" onClick='onRemove(this)'>Remove</button>
                    </div>
                </div>
            </div>
    `
})

movieCardContainer.innerHTML = movieCardsResult;

}

createMovieCards(movieArr);


const MovieModelHandler = () => {
    movieForm.reset();
  backDrop.classList.toggle('active');
  movieModel.classList.toggle('active');
}

const onMovieSubmit = (eve) => {
    eve.preventDefault();
    let newMovieObj = {
         movietitle : movieTitleControl.value,
         overview : overviewControl.value,
         rating : ratingControl.value,
         movieUrl : movieUrlControl.value,
         movieId : uuid()
    }

    movieArr.unshift(newMovieObj);
    eve.target.reset();
    
  let cardDiv = document.createElement('div');
  cardDiv.className = `col-md-6 col-lg-3 mb-4`;
  cardDiv.innerHTML = `
                <div class="card h-100 movieCard" id="${newMovieObj.movieId}">
                    <div class="card-header movie-h">
                        <h3 class='mb-0 movieTitle'>${newMovieObj.movietitle}</h3>
                    </div>
                    <div class="card-body cardbody-bg">
                        <figure class='mb-0'>
                            <img class="w-100"
                            src="${newMovieObj.movieUrl}" alt="">
                            <figcaption class='mb-0'>
                             <div class="movietitle">
                                                 <div class="row">
                                                     <div class="col-10">
                                                         <h4 class ='h4'>
                                                             ${newMovieObj.movietitle}
                                                         </h4>
                                                     </div>
                                                     <div class="col-2 rating text-center align-self-center">
                                                         <span class="${setClassRating(newMovieObj.rating )}">
                                                             ${newMovieObj.rating}
                                                         </span>
                                                     </div>
                                                 </div> 
                                             </div>                 
                      <p class='movieOverview'>     
                      ${newMovieObj.overview}
                      </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card-footer moviefooter d-flex justify-content-between">
                        <button class="btn btn-sm btn-info" onClick='onEdit(this)'>Edit</button>
                        <button class="btn btn-sm btn-danger" onClick='onRemove(this)'>Remove</button>
                    </div>
                </div>
  `
    movieCardContainer.prepend(cardDiv);
    snackBar(`new movie ${newMovieObj.movietitle} is added successfully`, `success`);
    MovieModelHandler();
}   


const onMovieUpdate = () => {
    let updatedMovie = {
        movietitle : movieTitleControl.value,
        overview : overviewControl.value,
        rating : ratingControl.value,
        movieUrl : movieUrlControl.value,
        movieId : uuid()
    }
    let getIndex = movieArr.findIndex(movie => movie.movieId === editId);
     movieArr[getIndex] = updatedMovie;
     
     let card = [...document.getElementById(editId).children];
     card[0].innerHTML = `<h3 class='mb-0 movieTitle'>${updatedMovie.movietitle}</h3>`;
     card[1].innerHTML = `
                 <figure class='mb-0'>
                            <img class="w-100"
                            src="${updatedMovie.movieUrl}" alt="">
                            <figcaption class='mb-0'>
                             <div class="movietitle">
                                                 <div class="row">
                                                     <div class="col-10">
                                                         <h4 class ='h4'>
                                                             ${updatedMovie.movietitle}
                                                         </h4>
                                                     </div>
                                                     <div class="col-2 rating text-center align-self-center">
                                                         <span class="${setClassRating(updatedMovie.rating )}">
                                                             ${updatedMovie.rating}
                                                         </span>
                                                     </div>
                                                 </div> 
                                             </div>                 
                      <p class='movieOverview'>     
                      ${updatedMovie.overview}
                      </p>
                            </figcaption>
                        </figure>
     `

     snackBar(`new movie ${updatedMovie.movietitle} is updated successfully`, `success`);
}

showModelBtn.addEventListener('click', MovieModelHandler);
closeModal.forEach(ele => {
    ele.addEventListener('click', MovieModelHandler)
});
movieForm.addEventListener('submit', onMovieSubmit);
updateBtn.addEventListener('click', onMovieUpdate)

function setClassRating(rating) {
    if (rating <= 2) {
       return "bg-danger";
    } else if (rating > 3 && rating < 4) {
       return "bg-warning";
    } else {
       return "bg-success";
    }
 }
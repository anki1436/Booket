
import { categories }  from "./data.js";
 import { popular }  from  "./data.js";
 import { recomended }  from  "./data.js";
 import { featured }  from  "./data.js";
 import { nearBy }  from  "./data.js";
 import { organizer }  from  "./data.js";



categories.forEach((cat) => {
    let category= document.getElementById("category");

    category.innerHTML += `
    <div class="catergory-card card rounded-lg text-white position-relative">
    <div class="catergory-card-img position-absolute">
        <img src= ${cat.img} alt=${cat.alt}>
    </div>
    <div class="catergory-card-info">
        <div class="catergory-card-info-title">
            ${cat.title}
        </div>
        <span class="catergory-card-info-desc">
        ${cat.event}
        </span>
    </div>
    <div class="catergory-card-btn rounded-pill d-flex justify-content-center align-items-center bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16.195" height="11.436"
            viewBox="0 0 16.195 11.436">
            <path id="Path_63" data-name="Path 63"
                d="M11.06,14.831a.576.576,0,1,0-.811.811l4.139,4.144H.706a.578.578,0,0,0,0,1.154H14.388l-4.146,4.139a.587.587,0,0,0,0,.811.573.573,0,0,0,.811,0l5.128-5.128a.563.563,0,0,0,0-.811Z"
                transform="translate(-0.159 -14.624)" fill="#fe7700" />
        </svg>
    </div>
</div>
    `

})
popular.forEach((pop)=>{
    let popularCon= document.getElementById("popular");

    popularCon.innerHTML +=`
    <div class="card event-card">
                    <div class="event-card-img-con">
                        <img src=${pop.img} alt=${pop.alt}>
                        <div class="event-card-img-con-heart-icon rounded-pill rounded-pill">
                            <img src="./image/event-heart.svg" alt="like">
                        </div>
                    </div>
                    <div class="event-card-desc">
                        <p class="event-card-desc-time">${pop.eventTime}</p>
                        <div class="event-card-desc-info">
                            <div class="event-card-desc-info__left">
                                <p class="event-card-desc-info__left-title">${pop.title}</p>
                                <p class="event-card-desc-info__left-location">${pop.location}</p>
                            </div>
                            <div class="event-card-desc-info__right">
                                <div class="event-card-desc-info__right-icon">
                                    <img src="./image/share.svg" alt="share">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    `

});

featured.forEach((feature)=>{
    let featuredCon= document.getElementById("featured");


    featuredCon.innerHTML +=`
    <div class="event-card">
                    <div class="event-card-img-con">
                        <img src=${feature.img} alt=${feature.alt}>
                        <div class="event-card-img-con-heart-icon rounded-pill rounded-pill">
                            <img src="./image/event-heart.svg" alt="like">
                        </div>
                    </div>
                    <div class="event-card-desc">
                        <p class="event-card-desc-time">${feature.eventTime}</p>
                        <div class="event-card-desc-info">
                            <div class="event-card-desc-info__left">
                                <span class="event-card-desc-info__left-title">${feature.title}</span>
                                <span class="event-card-desc-info__left-location">${feature.location}</span>
                            </div>
                            <div class="event-card-desc-info__right">
                                <div class="event-card-desc-info__right-icon">
                                    <img src="./image/share.svg" alt="share">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    `

});
recomended.forEach((rec)=>{
    let recCon= document.getElementById("recomended");

    recCon.innerHTML +=`
    <div class="event-card">
                    <div class="event-card-img-con">
                        <img src=${rec.img} alt=${rec.alt}>
                        <div class="event-card-img-con-heart-icon rounded-pill rounded-pill">
                            <img src="./image/event-heart.svg" alt="like">
                        </div>
                    </div>
                    <div class="event-card-desc">
                        <p class="event-card-desc-time">${rec.eventTime}</p>
                        <div class="event-card-desc-info">
                            <div class="event-card-desc-info__left">
                                <span class="event-card-desc-info__left-title">${rec.title}</span>
                                <span class="event-card-desc-info__left-location">${rec.location}</span>
                            </div>
                            <div class="event-card-desc-info__right">
                                <div class="event-card-desc-info__right-icon">
                                    <img src="./image/share.svg" alt="share">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    `

});
nearBy.forEach((nearBy)=>{
    let nearByCon= document.getElementById("nearBy");

    nearByCon.innerHTML +=`
    <div class="event-card">
                    <div class="event-card-img-con">
                        <img src=${nearBy.img} alt=${nearBy.alt}>
                        <div class="event-card-img-con-heart-icon rounded-pill rounded-pill">
                            <img src="./image/event-heart.svg" alt="like">
                        </div>
                    </div>
                    <div class="event-card-desc">
                        <p class="event-card-desc-time">${nearBy.eventTime}</p>
                        <div class="event-card-desc-info">
                            <div class="event-card-desc-info__left">
                                <span class="event-card-desc-info__left-title">${nearBy.title}</span>
                                <span class="event-card-desc-info__left-location">${nearBy.location}</span>
                            </div>
                            <div class="event-card-desc-info__right">
                                <div class="event-card-desc-info__right-icon">
                                    <img src="./image/share.svg" alt="share">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    `

});
organizer.forEach((organizer)=>{
    let organizerCon= document.getElementById("organizer");

    organizerCon.innerHTML +=`
    <div class="organizer-card card">
    <div class="organizer-card-close">
        <img src="./image/organizer-close.svg" alt="close">
    </div>
    <img src=${organizer.img} class="organizer-card-img" alt=${organizer.alt}>
    <h5 class="organizer-card-title">${organizer.title}</h5>
    <span class="organizer-card-follower">${organizer.followerCount} Follower</span>
    <button class="btn btn-outline-warning organizer-card-btn ">Follow</button>
</div>
    `


});





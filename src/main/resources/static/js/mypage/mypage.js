$(document).ready(function(){
    const $mypageProfileImg = $("#mypage-profile-img");
    const $mypageProfileId = $("#mypage-profile-id");

    // let type = $("select[name=type]").val();
    // let keyword = $("input[name=keyword]").val();
    let textImg = "";
    let textId = "";

    console.log("----------");
    console.log(memberId);
    console.log(myId);
    console.log("----------22");

    textId += `
        <div id="mypage-profile-id" class="mypage-profile-id">${myId.userName}</div>
    `


    $mypageProfileImg.append(textImg);
    $mypageProfileId.html(textId);
});









//
// $(document).ready(function(){
//     const $mypageProfileImg = $("#mypage-profile-img");
//     const $mypageProfileId = $("#mypage-profile-id");
//
//     let type = $("select[name=type]").val();
//     let keyword = $("input[name=keyword]").val();
//     let textImg = "";
//     let textId = "";
//     posts.forEach(post => {
//         text += `
//             <li>
//                 <div>
//                     <a href="/post/read?id=${post.id}&type=${type}&keyword=${keyword}">
//                         <h1>${post.id}</h1>
//                         <section class="content-container">
//                             <div class="profile">
//                                 <div><img src="/images/profile.png" width="15px"></div>
//                                 <h6 class="writer">${post.memberName}</h6>
//                             </div>
//                             <h4 class="title">${post.postTitle}</h4>
//                             <h6 clss="post-info">
//                                 <span class="read-count">조회 ${post.postReadCount}</span>
//                                 <span>·</span>
//                                 <span class="date">${elapsedTime(post.postRegisterDate)}</span>
//                             </h6>
//                         </section>
//         `
//         // post.files.forEach(file => {
//
//         //     if(file.fileType == "REPRESENTATIVE"){
//         //         text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}" class="preview">`;
//         //     }
//         // })
//
//         text += `
//                     </a>
//                 </div>
//             </li>
//         `
//     });
//
//     $mypageProfileImg.append(textImg);
//     $mypageProfileId.html(textId);
// });
//

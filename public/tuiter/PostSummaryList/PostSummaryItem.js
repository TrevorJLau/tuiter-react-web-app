const PostListItem = (post) => {
    return(`

    <li class="list-group-item">
        <div class="row">
            <!-- Row Content -->
            <div class="col-10">
            
                <div class = wd-post-gray>
                    ${post.topic}
                </div> <br>
                <div class = wd-author>
                    ${post.userName}
                </div>
                <div class = wd-post-gray>
                    ${post.time}
                </div> <br>
                <div class = wd-post-white>
                    ${post.title}
                </div> <br>
                <div class = wd-post-gray>
                    ${post.tweets}
                </div> <br>

            </div>
            <!-- Row Pic -->
            <div class="col-2">
                <img width = 60px height = 60px src=${post.image}>
            </div>
        </div>
    </li>`
    );
}
export default PostListItem;


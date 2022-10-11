const WhoToFollowListItem = (who) => {
    return(`

    <li class="list-group-item">
        <div class="row">
            <!-- Image -->
            <div class="col-2"><img class="rounded-circle" height=50px width=50px src=${who.avatarIcon}></div>
            <!-- User -->
            <div class="col-7">
                <div class="float-start wd-username-bold">
                    ${who.userName}
                </div><br>
                <div class="float-start wd.username">
                    ${who.handle}
                </div>
            </div>
            <!-- Follow Button -->
            <div class="col-3"> <button class="btn btn-primary rounded-pill float-end"> Follow </button> </div>
        </div>
    </li>`
    );
}
export default WhoToFollowListItem;


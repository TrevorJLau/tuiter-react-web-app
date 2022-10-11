const ExploreComponent = () => {
    return(`
             <!-- Top Bar Column -->
            <div class="row position-relative">

                <!-- Search Bar -->
                <div class="col-11">
                    <input class="form-control rounded-pill" placeholder="    Search Tuitter">
                </div>

                <!-- Search Icon -->
                <span class="position-absolute wd-magnify"> &#128269;
                </span>

                <!-- Gear Icon -->
                <div class="col-1 float-end">
                    <i class="fa fa-cog fa-2x wd-cog"></i>
                </div>
            </div>
            
            <!-- Tabs -->
            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            
            <!-- Pic & Caption -->
            <div class="position-relative">
                <img class="form-control" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/SpaceX_Crew_Dragon_%28More_cropped%29.jpg/1280px-SpaceX_Crew_Dragon_%28More_cropped%29.jpg">
                <h1 class="position-absolute wd-nudge-caption text-white">SpaceX's Starship</h1>
            </div>
 `);
}
export default ExploreComponent;


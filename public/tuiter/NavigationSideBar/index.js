const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       
       <a class="list-group-item" href="/">
       <i class="fa fa-solid fa-home">Home</i>
       
       <a class="list-group-item" href="/">
        <i class="fa fa-solid fa-hashtag">Explore</i>
       
       <a class="list-group-item" href="/">
       <i class="fa fa-solid fa-bell">Notifications</i>
       
       <a class="list-group-item" href="/">
       <i class="fa fa-solid fa-envelope">Messages</i>
       
       <a class="list-group-item" href="/">
       <i class="fa fa-solid fa-bookmark">Bookmarks</i>
       
       <a class="list-group-item" href="/">
       <i class="fa fa-solid fa-list">Lists</i>
       
       <a class="list-group-item" href="/">
       <i class="fa fa-solid fa-user">Profile</i>
       
       <a class="list-group-item" href="/">
       <i class="fa fa-solid fa-circle">More</i>
       
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;


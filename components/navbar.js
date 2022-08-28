let navbar = () => {
    return ` <ul>
    <li id="logo"><a href="./index.html"><img
                src="https://www.jefit.com/wp/wp-content/uploads/2017/07/cropped-logo_155_40_white-120x31.webp"
                alt="JEFIT"></a></li>
    <li><a href="./index.html">Get Jefit App <i class="fa fa-angle-down"></i></a>
        <div class="sub_menu_1">
            <ul>
                <li><a href="https://apps.apple.com/app/apple-store/id449810000">Workout App (iOS)</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail">Workout App (Android)</a></li>
            </ul>
        </div>
    </li>
    <li><a href="./workoutplan.html">Workout Plans <i class="fa fa-angle-down"></i></a>
        <div class="sub_menu_1">
            <ul>
                <li><a href="./workoutplan.html">Pro-designed Plans</a></li>
                <li><a href="./routine.html">Create My Plans</a></li>
            </ul>
        </div>
    </li>
    <li><a href="https://www.jefit.com/exercises/">Exercise Guides</a></li>
    <li><a href="./blog.html">Blog</a></li>
    <li><a href="./coach.html">Coach</a></li>
    <li><a href="./elite.html">Elite</a></li>
    <li><a href="./login.html">Login</a></li>
    <li id="signUp"><a href="./signup.html">Sign Up</a></li>
</ul>`;
}

export  {navbar};
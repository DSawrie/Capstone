import html from "html-literal";

export default (state) => html`
<nav>
<div class="hidden--mobile">
<h1 class="archivo-black-regular"><a href="/dailytasks" data-navigo>Daily Tasks</a></h1>
<h1 class="archivo-black-regular"><a href="/aboutme" data-navigo>About Us</a></h1>
<h1 class="archivo-black-regular"><a href="/contactus" data-navigo>Contact Us</a></h1>
</div>
</nav>
<h3>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
  </h3>
`;

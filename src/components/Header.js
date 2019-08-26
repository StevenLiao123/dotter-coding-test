import React from 'react';

export default () => <nav class="navbar navbar-expand-lg navbar-expand-lg navbar-expand-md navbar-collapse nav-bg">
    <a class="navbar-brand" href="/"><img src="/assets/images/dotter-logo-2x.png" class="img-fluid" alt="dotter-logo" width="100" height="100" /></a>
    <button class="navbar-toggler" data-togger="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link text-white" href="/">Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="/">Hello Sam</a>
            </li>
            <li class="nav-item dropdown">
                <img src="/assets/images/user-logo.jpg" class="rounded-circle" alt="Cinque Terre" width="30" height="30" />
            </li>
        </ul>
    </div>
</nav>





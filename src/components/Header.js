import React from 'react';

export default () =>
    <nav class="navbar navbar-expand-lg bg-dark">
        <a class="navbar-brand" href="/"><img src="/assets/images/dotter-logo-2x.png" class="img-fluid" alt="dotter-logo" width="100" height="100" /></a>

        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav justify-content-end">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Dashboard <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Hello Sam</a>
                </li>
                <li class="nav-item dropdown">
                    <img src="/assets/images/user-logo.jpg" class="img-circle" alt="Cinque Terre" width="50" height="50" />
                </li>
            </ul>
        </div>
    </nav>

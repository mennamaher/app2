import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, HomeComponent, NavbarComponent, GalleryComponent, PortfolioComponent, NotfoundComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-1';
}

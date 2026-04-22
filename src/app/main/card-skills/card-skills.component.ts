import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.css', '../../../classes.css']
})
export class CardSkillsComponent 
{
  url = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
  languages =
  [
    {id: 1, label: 'HTML5', url: `${this.url}/html5/html5-original.svg`},
    {id: 2, label: 'CSS3', url: `${this.url}/css3/css3-original.svg`},
    {id: 3, label: 'Python', url: `${this.url}/python/python-original.svg`},
    {id: 4, label: 'Java', url: `${this.url}/java/java-original.svg`},
    {id: 5, label: 'JavaScript', url: `${this.url}/javascript/javascript-original.svg`},
    {id: 6, label: 'TypeScript', url: `${this.url}/typescript/typescript-original.svg`},
    {id: 7, label: 'SQL', url: `${this.url}/azuresqldatabase/azuresqldatabase-original.svg`},
    {id: 8, label: 'XML', url: `${this.url}/xml/xml-original.svg`},
  ];
  frameworks = 
  [
    {id: 1, label: 'React.js', url: `${this.url}/react/react-original.svg`},
    {id: 2, label: 'Angular', url: `${this.url}/angularjs/angularjs-original.svg`},
    {id: 3, label: 'Vue.js', url: `${this.url}/vuejs/vuejs-original.svg`},
    {id: 4, label: 'Next.js', url: `${this.url}/nextjs/nextjs-original.svg`},
    {id: 5, label: 'Bootstrap', url: `${this.url}/bootstrap/bootstrap-original.svg`},
    {id: 6, label: 'Sass (SCSS)', url: `${this.url}/sass/sass-original.svg`},
    {id: 7, label: 'Tailwind CSS', url: `${this.url}/tailwindcss/tailwindcss-original.svg`},
  ];
  tools =
  [
    {id: 1, label: 'VS Code', url: `${this.url}/vscode/vscode-original.svg`},
    {id: 2, label: 'Git', url: `${this.url}/git/git-original.svg`},
    {id: 3, label: 'Vite.js', url: `${this.url}/vitejs/vitejs-original.svg`},
    {id: 4, label: 'Linux', url: `${this.url}/linux/linux-original.svg`},
    {id: 5, label: 'Node.js', url: `${this.url}/nodejs/nodejs-original.svg`},
    {id: 6, label: 'Apache NetBeans', url: `${this.url}/netbeans/netbeans-original.svg`},
    {id: 7, label: 'IntelliJ', url: `${this.url}/intellij/intellij-original.svg`},
    {id: 8, label: 'Eclipse', url: `${this.url}/eclipse/eclipse-original.svg`},
    {id: 9, label: 'Arch Linux', url: `${this.url}/archlinux/archlinux-original.svg`},
    {id: 10, label: 'MySQL', url: `${this.url}/mysql/mysql-original.svg`},
  ];
  platforms =
  [
    {id: 1, label: 'GitHub', url: `${this.url}/github/github-original.svg`},
    {id: 2, label: 'WordPress', url: `${this.url}/wordpress/wordpress-plain.svg`},
  ];
}

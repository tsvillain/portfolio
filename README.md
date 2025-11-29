# Portfolio Website

A modern, clean personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a minimalist design with a warm cream and red color scheme.

## 🎨 Design Philosophy

This portfolio embraces a clean, modern design with:

- **Minimalist approach**: Focus on content with clean typography and spacing
- **Modern aesthetic**: Clean design with warm cream background and red accents
- **Professional color scheme**: Cream background with red primary colors and stone grays
- **Clean layout**: Simple structure with proper semantic HTML
- **Responsive design**: Optimized for mobile, tablet, and desktop

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Navigation**: Fixed navigation with smooth scrolling and mobile menu
- **Component-based Architecture**: Reusable components for projects, experience, and sections
- **Semantic HTML**: Proper use of headings, paragraphs, and lists
- **Accessibility**: WCAG compliant with proper contrast and navigation
- **Fast Performance**: Optimized for speed with Next.js and minimal dependencies
- **SEO Friendly**: Proper meta tags and structured content

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── work/page.tsx            # Work experience
│   ├── portfolio/page.tsx       # Projects showcase
│   ├── recommendations/page.tsx # LinkedIn recommendations
│   ├── articles/page.tsx        # Technical articles
│   ├── games/page.tsx           # Games showcase
│   ├── contact/page.tsx         # Contact information
│   ├── layout.tsx               # Global layout with navigation
│   ├── globals.css              # Global styles and Tailwind config
│   └── components/
│       ├── Navigation.tsx       # Main navigation component
│       ├── Hero.tsx             # Hero section component
│       ├── Section.tsx           # Section wrapper component
│       ├── ProjectCard.tsx      # Project card component
│       └── ExperienceCard.tsx   # Experience card component
├── data/
│   └── content.ts              # Content data and configuration
└── lib/
    └── medium.ts               # Medium RSS feed integration
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Fonts**: Inter (primary) and JetBrains Mono (code) from Google Fonts
- **Icons**: Lucide React
- **RSS Parsing**: xml2js for Medium article feeds
- **Deployment**: Vercel

## 🎯 Pages

1. **Home** - Introduction and about me with hero section
2. **Work Experience** - Professional roles and achievements
3. **Portfolio** - Featured projects with GitHub links
4. **LinkedIn Recommendations** - Professional testimonials
5. **Medium Articles** - Technical writing and tutorials (fetched from RSS)
6. **Games** - Personal game projects showcase
7. **Contact** - Contact information and availability

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information

Update the content in each page file (`src/app/*/page.tsx`) with your own:

- Name and personal details
- Work experience and achievements
- Project portfolio
- Contact information
- Social media links

### Styling

The styling is defined in `src/app/globals.css` using Tailwind CSS v4. Key customization points:

- **Colors**: Modify CSS variables in the `:root` selector (primary, secondary, text, background colors)
- **Fonts**: Change font-family declarations in the `@theme` block (Inter and JetBrains Mono)
- **Layout**: Adjust container max-width and spacing in utility classes
- **Components**: Customize card, button, and tag styles

### Navigation

Update the navigation links in `src/app/components/Navigation.tsx` to match your page structure.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Desktop**: Full layout with horizontal navigation and dropdown menu
- **Tablet**: Adjusted spacing and typography with responsive navigation
- **Mobile**: Hamburger menu with stacked navigation and optimized content

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- High contrast color scheme
- Keyboard navigation support
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `out` directory to Netlify

### Static Hosting

1. Build the project: `npm run build`
2. Upload the `out` directory to any static hosting service

## 🎨 Design Elements

### Typography

- Inter font for primary text (clean, modern sans-serif)
- JetBrains Mono for code snippets and technical content
- Proper heading hierarchy with optimized letter spacing
- Clean line spacing and readable font sizes

### Colors

- **Primary**: Red (#dc2626) for links, buttons, and accents
- **Background**: Warm cream (#fdfbf7) for page background
- **Text**: Stone grays for primary and secondary text
- **Cards**: White backgrounds with subtle borders
- **Hover States**: Smooth color transitions on interactive elements

### Effects

- Fixed navigation with backdrop blur on scroll
- Smooth hover transitions on cards and buttons
- Mobile-friendly dropdown menu with animations
- Responsive design with mobile-optimized navigation

## 📝 Content Guidelines

When customizing the content, maintain the clean aesthetic by:

- Using clean, readable text descriptions
- Keeping content focused and concise
- Using proper HTML semantics
- Maintaining consistent formatting
- Leveraging component-based architecture for consistency

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for accessibility and performance
- Inter and JetBrains Mono fonts for clean typography
- Tailwind CSS for efficient styling

---

**Version**: 1.0.0

**Built with ❤️ and appreciation for clean, functional design**

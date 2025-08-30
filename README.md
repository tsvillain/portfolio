# Retro 90s Portfolio Website

A minimal personal portfolio website built with Next.js, TypeScript, and TailwindCSS, featuring an authentic early 90s text-based web aesthetic.

## 🎨 Design Philosophy

This portfolio embraces the nostalgic charm of early web design with:

- **Text-first approach**: No images or decorative elements
- **Classic typography**: Monospaced fonts (Courier New, Source Code Pro)
- **Retro color scheme**: Black text on light background with blue hyperlinks
- **Simple layout**: Top-down structure with proper semantic HTML
- **Subtle retro effects**: CRT scanline overlay and pixelated textures

## 🚀 Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Semantic HTML**: Proper use of headings, paragraphs, and lists
- **Accessibility**: WCAG compliant with proper contrast and navigation
- **Fast Performance**: Optimized for speed with minimal dependencies
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
│   ├── contact/page.tsx         # Contact information
│   ├── layout.tsx               # Global layout with navigation
│   └── globals.css              # Retro styling
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom retro CSS
- **Fonts**: Courier New, Source Code Pro (Google Fonts)
- **Deployment**: Vercel

## 🎯 Pages

1. **Home** - Introduction and about me
2. **Work Experience** - Professional roles and achievements
3. **Portfolio** - Featured projects with GitHub links
4. **LinkedIn Recommendations** - Professional testimonials
5. **Medium Articles** - Technical writing and tutorials
6. **Contact** - Contact information and availability

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio-90s
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

The retro styling is defined in `src/app/globals.css`. Key customization points:

- **Colors**: Modify CSS variables in `:root`
- **Fonts**: Change font-family declarations
- **Layout**: Adjust container max-width and spacing
- **Effects**: Modify or remove the CRT scanline effect

### Navigation

Update the navigation links in `src/app/layout.tsx` to match your page structure.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Desktop**: Full layout with horizontal navigation
- **Tablet**: Adjusted spacing and typography
- **Mobile**: Stacked navigation and optimized content

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

## 🎨 Retro Design Elements

### Typography

- Monospaced fonts for authentic 90s feel
- Proper heading hierarchy
- Justified text alignment

### Colors

- Light gray background (#f8f8f8)
- Black text (#000000)
- Classic blue links (#0000ff)
- Accent blue (#0066cc)

### Effects

- Subtle CRT scanline overlay
- Classic underlined hyperlinks
- Simple borders and spacing

## 📝 Content Guidelines

When customizing the content, maintain the retro aesthetic by:

- Using plain text descriptions
- Avoiding modern UI jargon
- Keeping links simple and descriptive
- Using proper HTML semantics
- Maintaining consistent formatting

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by early web design aesthetics
- Built with modern web technologies
- Designed for accessibility and performance

---

**Built with ❤️ and nostalgia for the early days of the web**

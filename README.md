# Terminal Portfolio Website

A minimalist personal portfolio website built with Next.js, TypeScript, and CSS, featuring a clean terminal-inspired aesthetic with modern monospace typography.

## 🎨 Design Philosophy

This portfolio embraces a clean, terminal-inspired design with:

- **Text-first approach**: Minimalist design focused on content
- **Terminal aesthetic**: Monospace fonts (JetBrains Mono) with terminal-style prompts
- **Modern color scheme**: Dark theme with light text and accent colors
- **Clean layout**: Simple structure with proper semantic HTML
- **Responsive design**: Optimized for mobile, tablet, and desktop

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Theme Support**: Light, dark, and system theme options with persistence
- **Terminal Navigation**: Clean navigation with active state indicators
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
│   ├── globals.css              # Terminal styling and theme
│   └── components/
│       ├── Navigation.tsx       # Main navigation component
│       ├── ThemeProvider.tsx    # Theme context provider
│       └── ThemeSelector.tsx    # Theme toggle component
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS variables for theming
- **Fonts**: JetBrains Mono (Google Fonts)
- **State Management**: React Context for theme management
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

The terminal styling is defined in `src/app/globals.css`. Key customization points:

- **Colors**: Modify CSS variables for light/dark themes
- **Fonts**: Change font-family declarations (JetBrains Mono recommended)
- **Layout**: Adjust container max-width and spacing
- **Theme**: Customize light/dark theme colors and system theme behavior

### Navigation

Update the navigation links in `src/app/components/Navigation.tsx` to match your page structure.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Desktop**: Full layout with horizontal navigation and theme selector
- **Tablet**: Adjusted spacing and typography with responsive navigation
- **Mobile**: Stacked navigation, optimized content, and mobile-friendly theme toggle

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

## 🎨 Terminal Design Elements

### Typography

- JetBrains Mono monospace font for terminal aesthetic
- Proper heading hierarchy with terminal-style prompts
- Clean line spacing and letter spacing

### Colors

- **Dark Theme**: Dark background with light text and accent colors
- **Light Theme**: Light background with dark text and accent colors
- **System Theme**: Automatically follows user's system preference
- **Accent Colors**: Orange for active states, green for highlights

### Effects

- Terminal-style navigation with active state indicators
- Clean borders and spacing
- Smooth theme transitions
- Responsive design with mobile-optimized navigation

## 📝 Content Guidelines

When customizing the content, maintain the terminal aesthetic by:

- Using clean, readable text descriptions
- Keeping content focused and concise
- Using proper HTML semantics
- Maintaining consistent formatting
- Leveraging terminal-style prompts and indicators

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by terminal and command-line interfaces
- Built with modern web technologies
- Designed for accessibility and performance
- JetBrains Mono font for authentic terminal feel

---

**Built with ❤️ and appreciation for clean, functional design**

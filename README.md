# Zeykia Luxury Carpet Website

A modern, responsive Next.js website for Zeykia, a luxury carpet brand showcasing artisanal craftsmanship and exclusive collections.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with smooth animations
- **Responsive Layout**: Optimized for all devices
- **Next.js 14**: Built with the latest Next.js features
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Motion Animations**: Smooth page transitions and interactions
- **Image Optimization**: Next.js Image component with fallbacks

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── products/          # Products pages
│   ├── exclusive/         # Exclusive products
│   ├── export/            # Export services
│   ├── statements/        # Brand statements
│   └── colors/            # Color library
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── ImageWithFallback.tsx # Image component
│   └── pages/             # Page components
└── styles/                # Additional styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zeykia-luxury-carpet-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

- **Home**: Hero section with featured collections
- **About**: Brand story and founder information
- **Products**: Product catalog with filtering
- **Exclusive**: Pre-order bespoke pieces
- **Export**: International shipping and partnerships
- **Statements**: Brand philosophy and artisan quotes
- **Colors**: Color library with stories and variations

## 🎨 Design System

### Colors
- **Primary**: Slate grays and emerald accents
- **Glassmorphism**: Translucent panels with backdrop blur
- **Brand Colors**: Custom Zeykia color palette

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- **Glass Cards**: Translucent panels with hover effects
- **Glass Buttons**: Interactive buttons with backdrop blur
- **Navigation**: Fixed header with smooth transitions

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Import and use the Navigation and Footer components

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes
- Custom CSS variables for brand colors

### Images
- Use the `ImageWithFallback` component for optimized images
- Images are served from Unsplash (replace with your own)

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
# or
yarn build
```

### Start Production Server
```bash
npm start
# or
yarn start
```

### Deploy to Vercel
The project is optimized for Vercel deployment:
1. Connect your repository to Vercel
2. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from luxury brands
- Unsplash for placeholder images
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach 
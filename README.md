# AI Agent Regulation & Compliance Slides

Executive briefing on AI agent compliance requirements and the Ambient Agent solution.

## 🚀 Quick Deploy to GitHub Pages

### Option 1: Deploy from this folder

1. **Create a new GitHub repository**
   ```bash
   # Initialize git in the github-pages-version folder
   cd github-pages-version
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   ```bash
   # Add your repository as origin
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/" (root) folder
   - Click Save

4. **Access your slides**
   - Your slides will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - It may take a few minutes for the site to be available

### Option 2: Deploy as a subfolder

If you want to add these slides to an existing repository:

1. **Copy the github-pages-version folder to your repo**
   ```bash
   cp -r github-pages-version /path/to/your/repo/slides
   ```

2. **Update _config.yml**
   - Edit `baseurl` to match your path: `baseurl: "/your-repo-name/slides"`

3. **Commit and push**
   ```bash
   git add slides/
   git commit -m "Add AI compliance slides"
   git push
   ```

## 📁 File Structure

```
github-pages-version/
├── _config.yml              # Jekyll configuration
├── index.html              # Main navigation page
├── common-styles.css       # Shared styles
├── slide-navigation.js     # Navigation JavaScript
├── slide-01-*.html         # Individual slide files
├── slide-02-*.html
├── ... (all 15 slides)
└── README.md              # This file
```

## 🎨 Customization

### Update Repository Info
1. Edit `_config.yml`:
   - Change `baseurl` to match your repository name
   - Update `title`, `description`, and other metadata

2. Edit `index.html`:
   - Update the GitHub banner link (line ~340)
   - Update download links
   - Modify color scheme in CSS variables

### Add Your Branding
- Replace color variables in CSS
- Add your logo/images
- Update meta tags for SEO

## 🔧 Local Development

To test locally before deploying:

```bash
# Install Jekyll (requires Ruby)
gem install bundler jekyll

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# View at http://localhost:4000/your-repo-name/
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Keyboard navigation (arrow keys)
- ✅ Mobile-friendly touch gestures
- ✅ Print-friendly layout
- ✅ SEO optimized
- ✅ Social media preview tags

## 🚦 GitHub Actions (Optional)

To automate deployment, create `.github/workflows/pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/configure-pages@v3
      - uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site
      - uses: actions/upload-pages-artifact@v2
      - uses: actions/deploy-pages@v2
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. See LICENSE file for details.

## 🆘 Support

For issues or questions:
- Open an issue on GitHub
- Contact: support@yourorganization.com

---

**Remember:** These slides contain important compliance information. Ensure appropriate access controls are in place.
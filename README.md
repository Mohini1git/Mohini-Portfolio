# High Court Portal - Case Management System

A comprehensive web application for High Court case management, designed for lawyers and legal professionals to efficiently manage their cases, access lawyer directories, and handle payments.

## Features

### 🏛️ Dashboard
- **Case Statistics**: Overview of total, pending, and completed cases
- **Recent Cases**: Quick access to recently filed cases
- **Next Hearings**: Upcoming court dates and schedules
- **Quick Actions**: Fast access to common tasks

### 📋 Case Management
- **Case Listing**: View all cases with advanced filtering and search
- **Case Details**: Comprehensive case information including:
  - Case number and title
  - Client information
  - Case type (Civil, Criminal, Family, Commercial)
  - Status tracking (Pending, In Progress, Completed)
  - Priority levels (High, Medium, Low)
  - Hearing dates and schedules
- **Add New Cases**: Easy case creation with detailed forms
- **Document Management**: Attach and manage case documents
- **Search & Filter**: Advanced search by case number, title, client, or status

### 👨‍💼 Lawyers Directory
- **Lawyer Profiles**: Detailed lawyer information including:
  - Specializations and expertise areas
  - Experience and success rates
  - Contact information
  - Availability status
  - Client ratings and reviews
- **Advanced Search**: Filter by specialization, location, availability
- **Verified Lawyers**: Badge system for verified professionals
- **Contact & Hire**: Direct communication and hiring options

### 💳 Payments & Plans
- **Payment History**: Complete transaction records
- **Pending Payments**: Track outstanding payments with due dates
- **Subscription Plans**: Multiple tiers (Basic, Professional, Enterprise)
- **Payment Processing**: Secure payment gateway integration
- **Receipt Generation**: Downloadable payment receipts

### 🔔 Notifications
- **Real-time Updates**: Instant notifications for case updates
- **Hearing Reminders**: Automated reminders for upcoming hearings
- **Payment Alerts**: Due date notifications and payment confirmations
- **System Notifications**: Important system updates and announcements

## Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: CSS3 with CSS Variables for theming
- **Build Tool**: Vite
- **Icons**: Unicode emojis and SVG icons
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd high-court-portal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
high-court-portal/
├── src/
│   ├── screens/
│   │   ├── screen.js          # Main application screen
│   │   ├── cases.js           # Cases management screen
│   │   ├── lawyers.js         # Lawyers directory screen
│   │   └── payments.js        # Payments & plans screen
│   ├── assets/
│   │   ├── fonts/             # Custom fonts
│   │   └── images/            # Application images and icons
│   ├── main.js                # Application entry point
│   └── style.css              # Main stylesheet
├── public/                    # Static assets
├── index.html                 # Main HTML file
├── package.json               # Project configuration
└── README.md                  # Project documentation
```

## Features in Detail

### Dashboard
The dashboard provides a comprehensive overview of your legal practice with:
- Real-time statistics on case counts and status
- Quick access to recent cases and upcoming hearings
- Action buttons for common tasks like adding new cases or making payments

### Case Management
Efficiently manage all your legal cases with:
- **Advanced Filtering**: Filter by status, type, priority, or date
- **Search Functionality**: Find cases by number, title, or client name
- **Detailed Case Views**: Complete case information with activity timeline
- **Document Attachment**: Upload and manage case-related documents
- **Status Tracking**: Monitor case progress from filing to completion

### Lawyer Directory
Connect with legal professionals through:
- **Comprehensive Profiles**: View lawyer specializations, experience, and success rates
- **Availability Status**: See real-time availability of lawyers
- **Rating System**: Client reviews and ratings for informed decisions
- **Direct Contact**: Built-in communication tools for quick consultation

### Payment Management
Handle all financial aspects with:
- **Multiple Payment Methods**: Support for UPI, Net Banking, Credit/Debit Cards
- **Subscription Plans**: Flexible pricing tiers for different practice sizes
- **Payment History**: Complete transaction records with receipt generation
- **Due Date Tracking**: Automated reminders for pending payments

## Customization

### Theming
The application supports both dark and light themes. Users can toggle between themes using the theme switcher in the header.

### Color Scheme
The application uses CSS custom properties for easy theme customization:
- Primary colors for branding and important elements
- Secondary colors for supporting elements
- Success, warning, and error colors for status indicators

### Responsive Design
The application is fully responsive and works seamlessly across:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact:
- Email: support@highcourtportal.com
- Phone: +91-XXXX-XXXXXX

## Acknowledgments

- Built with modern web technologies for optimal performance
- Designed with user experience and accessibility in mind
- Inspired by real-world legal practice management needs

---

**High Court Portal** - Streamlining legal practice management for the digital age.
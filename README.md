# Fintracker

Fintracker is a personal finance tracking application that helps you manage your finances effectively. With Fintracker, you can easily track your income, expenses, and savings, set budgets, and gain insights into your spending habits. It provides a user-friendly interface and helpful features to empower you in achieving your financial goals.

## Features

- **Income and Expense Tracking**: Record your income and expenses with ease and categorize them for better organization.
- **Budget Management**: Set budgets for different expense categories and track your spending to stay within budget.
- **Savings Monitoring**: Keep track of your savings and monitor your progress towards your savings goals.
- **Visual Reports**: Gain insights into your financial data through visual representations like charts and graphs.
- **Goal Setting**: Set financial goals and track your progress towards achieving them.
- **Bill Reminders**: Get reminders for upcoming bills to ensure timely payments.
- **Financial Reports**: Generate detailed reports to analyze your financial performance over time.
- **User-Friendly Interface**: Enjoy a clean and intuitive interface for easy navigation and seamless user experience.

## Technologies Used

- Frontend: Typescript, Next.js, Tailwind CSS
- Backend: Firebase (Firestore)
- Libraries: React Toastify

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


1. Clone the repository:

```bash
git clone https://github.com/your-username/fintracker.git
```

2. Install dependencies:

```bash
cd fintracker
npm install
```

3. Set up Firebase:

   - Create a Firebase project and obtain the Firebase configuration (apiKey, authDomain, etc.).
   - Add the Firebase configuration to your project by creating a `.env` file at the root directory and adding the following variables:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

4. Start the development server:

```bash
npm start
```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Fintracker application.

## Contributing

Contributions are welcome! If you find any bugs or want to enhance the features of Fintracker, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- The icons used in this project are from [Feather Icons](https://feathericons.com/).
- The project structure and styling are inspired by modern design trends and best practices.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

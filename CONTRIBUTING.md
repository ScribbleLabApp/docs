<!-- Contributing Guidelines Text [START] -->
<!-- Copyright (c) 2024 - ScribbleLabApp LLC -->

# Contributing Guidelines for ScribbleLabApp Documentations

We’re thrilled that you’re considering contributing to ScribbleLab! Every contribution—big or small—helps us grow and create something remarkable for our community.

This guide outlines the expectations and process for contributing. Following these guidelines will ensure a smooth and enjoyable experience for everyone involved. Let’s build something amazing together!

### Table Of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How to Ask Questions](#how-to-ask-questions)
3. [Submitting Issues](#submitting-issues)
4. [Feature Suggestions](#feature-suggestions)
5. [Submitting Pull Requests](#submitting-pull-requests)
6. [Coding Style](#coding-style)
7. [Writing Commit Messages](#writing-commit-messages)
8. [Code Review Process](#code-review-process)
9. [Acknowledgments](#acknowledgments)
10. [Adding Documentation](#adding-documentation)

## Code of Conduct

At ScribbleLab, we strive to create a welcoming, inclusive, and respectful community. Please review and adhere to our Code of Conduct. Disrespectful or harmful behavior will not be tolerated. Let’s work together to maintain a positive and collaborative space.

## How to Ask Questions

Before opening an issue, check our Support Guide.

- Questions about the app or troubleshooting your setup should be addressed in the Discussions tab.
- Issues should focus on bugs, enhancements, or specific feature requests (see below).

## Submitting Issues

Issues help us track bugs and plan improvements. Follow these steps for creating a clear, actionable issue:

### Reporting Bugs

Use the template: Fill out the provided issue template completely. This ensures we have all the context needed to address the problem efficiently.

- Provide details: Include the app version, OS version, reproduction steps, and screenshots or logs, if applicable.
- Search first: Avoid duplicates by checking existing issues. If your bug is already reported, add your input or react to the issue.

If you discover a security vulnerability, please report it privately via our Security Policy. Do not file it as a public issue.

## Feature Suggestions

Got an idea to make ScribbleLab even better? Fantastic! Submit a feature request by following these steps:

1. Search existing requests to avoid duplicates.
2. Use the feature request template to provide:

- A clear description of the feature and its purpose.

- How it complements existing features.

- Mockups or examples, if applicable.

While we review all suggestions, not every idea will fit within our project’s scope. We encourage meaningful discussion and contributions to help refine your idea!

## Submitting Pull Requests

We love contributions! Follow these guidelines to submit your pull request effectively:

1. Discuss first: For significant changes, open an issue or start a discussion before submitting code.
2. One thing at a time: Keep pull requests focused on a single feature or fix. Smaller, atomic changes are easier to review and integrate.
3. Testing matters: Ensure your changes include proper test coverage.
4. Documentation required: Update code comments and relevant documentation to reflect your changes.
5. Follow the style: Maintain consistency with the existing coding style (see below).

> [!Note]
> All contributions are licensed under ScribbleLab’s project license.

## Coding Style

Adhere to the coding style guidelines specified in our [style guide](). Consistent code enhances readability and simplifies maintenance.

To format your code, run `npm run format`.

## Writing Commit Messages

Great commit messages help maintainers understand your changes.
Here’s the preferred format:

```md
(kind): Clear, concise summary of the change

Provide additional context if necessary. Explain the _why_ behind your changes, not just the _what_. Reference related issues when applicable.

Resolves: #issue_number
```

Example:

```md
(chore/security): Add AES-256 file encryption for secure notes

Improves security for sensitive content stored in the app. Uses a lightweight C library to ensure fast performance.

Resolves: #42
```

## Code Review Process

Code reviews are a cornerstone of maintaining quality.

- Be constructive: Review code, not the contributor. Offer actionable feedback and explain your reasoning.
- Timely responses: Address review comments promptly to keep the process efficient.

Our team aims to review pull requests within 3-5 business days. Larger changes may take longer.

## Acknowledgments

Your contributions make ScribbleLab better for everyone. Whether you’re reporting a bug, suggesting a feature, or submitting code, your efforts are deeply appreciated.

Let’s collaborate and create something inspiring for the ScribbleLab community! 🚀

## Adding Documentation

We use [Nextra](https://nextra.vercel.app/) and [Next.js](https://nextjs.org/) for our documentation. If you want to add new documentation or improve existing ones, follow these steps:

1. Check our [developer site]() for non-documented topics and guidelines.
2. Create or update markdown files in the `src/pages` directory.
3. Ensure your documentation follows the structure and style of existing documents.
4. Submit a pull request with your changes.

For more detailed instructions, refer to our [documentation guide]().

<!-- Contributing Guidelines Text [END] -->

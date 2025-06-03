
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Calendar } from 'lucide-react';

const DocumentPage = () => {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  const documentConfigs = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'January 1, 2024',
      content: `# Privacy Policy

## 1. Information Collection

We may collect the following types of personal information:

### 1.1 Personal Identity Information
- Full name
- National ID number
- Phone number
- Email address
- Bank account information

### 1.2 Device Information
- Device model and operating system
- IP address
- Application usage data

## 2. Information Usage

We use the collected information for:

- **Identity Verification**: Confirming your identity and eligibility
- **Risk Assessment**: Evaluating loan application risks
- **Service Provision**: Processing your loan applications and managing accounts
- **Customer Support**: Providing technical support and customer service

## 3. Information Protection

We adopt the following measures to protect your personal information:

- Use industry-standard encryption technology
- Implement strict access controls
- Regular security audits
- Employee privacy training

## 4. Information Sharing

We do not sell, trade, or transfer your personal information to third parties, except:

1. With your explicit consent
2. Legal requirements
3. Protecting our legitimate interests

## 5. Your Rights

You have the right to:

- Access your personal information
- Correct inaccurate information
- Delete your personal information
- Restrict information processing

## 6. Cookie Usage

We use cookies to:

- Remember your preference settings
- Analyze website usage
- Provide personalized experiences

## 7. Contact Us

If you have any questions about this privacy policy, please contact us:

**Email**: privacy@sulucash.com  
**Phone**: +254 700 000 000  
**Address**: Nairobi, Kenya CBD Business Center`
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'January 1, 2024',
      content: `# Terms of Service

## 1. Acceptance of Terms

By using the Sulu Cash application and services, you agree to comply with these Terms of Service.

## 2. Service Description

Sulu Cash provides the following services:

### 2.1 Cash Loan Services
- Short-term personal loans
- Fast approval and disbursement
- Flexible repayment options

### 2.2 Related Services
- Customer support
- Account management
- Financial education resources

## 3. Application Requirements

To use our services, you must:

- Be at least 18 years old
- Be a legal resident of Kenya
- Have valid identification documents
- Have a stable source of income

## 4. Loan Terms

### 4.1 Loan Amount
- Minimum: KSh 1,000
- Maximum: KSh 50,000

### 4.2 Loan Period
- Minimum: 7 days
- Maximum: 30 days

### 4.3 Interest Rates and Fees
- Daily interest rate: 0.1% - 0.5%
- Service fee: 1-3% of loan amount
- No hidden fees

## 5. Repayment

### 5.1 Payment Methods
- M-Pesa
- Bank transfer
- Other designated payment methods

### 5.2 Late Payment
- Late fee: 0.1% per day
- Collection procedures
- Credit record impact

## 6. User Responsibilities

You agree to:

- Provide true and accurate information
- Repay loans on time
- Comply with relevant laws and regulations
- Protect account security

## 7. Disclaimer

Sulu Cash is not responsible for:

- Service interruptions due to system maintenance
- Force majeure factors
- Third-party service provider issues

## 8. Terms Modification

We reserve the right to modify these terms at any time. Modified terms will be published in the application.

## 9. Dispute Resolution

Any disputes will be resolved through:

1. Friendly negotiation
2. Mediation
3. Kenyan court litigation

## 10. Contact Information

For questions, please contact:

**Email**: legal@sulucash.com  
**Phone**: +254 700 000 000`
    },
    license: {
      title: 'Business License',
      lastUpdated: 'January 1, 2024',
      content: `# Business License Information

## Company Registration Information

**Company Name**: Sulu Cash Financial Services Ltd.  
**Registration Number**: CPR/2020/123456  
**Registration Date**: March 15, 2020  
**Registered Address**: Nairobi, Kenya CBD Business Center

## Business Scope

Under Kenyan Company Law, the company is authorized to engage in the following businesses:

1. Microfinance services
2. Financial consulting services
3. Digital payment services
4. Credit assessment services

## Regulatory Licenses

### Financial Services License
- **License Number**: FSL/2020/001
- **Issuing Authority**: Central Bank of Kenya
- **Validity Period**: 2020-2025

### Data Protection License
- **License Number**: DPR/2020/002
- **Issuing Authority**: Office of the Data Protection Commissioner of Kenya
- **Validity Period**: 2020-2025

## Compliance Statement

The company strictly complies with the following laws and regulations:

- Kenya Banking Act
- Microfinance Act
- Data Protection Act
- Consumer Protection Act

## Audit Information

**Audit Firm**: KPMG Kenya  
**Last Audit Date**: December 31, 2023  
**Audit Result**: Compliant with no major violations

## Contact Information

**Regulatory Complaint Hotline**: +254 700 000 001  
**Compliance Email**: compliance@sulucash.com`
    },
    compliance: {
      title: 'Compliance Statement',
      lastUpdated: 'January 1, 2024',
      content: `# Compliance Statement

## Regulatory Compliance

Sulu Cash strictly adheres to Kenyan financial regulatory requirements:

### 1. Central Bank Regulation
- Regular reporting of business data
- Accepting regulatory inspections
- Compliance with capital adequacy requirements

### 2. Anti-Money Laundering Compliance
- Customer identification (KYC)
- Suspicious transaction reporting
- Employee anti-money laundering training

### 3. Data Protection Compliance
- Compliance with GDPR and local data protection laws
- Implementation of data protection measures
- Regular data protection training

## Responsible Lending

We are committed to responsible lending practices:

- Assessing borrower repayment capacity
- Providing transparent loan terms
- Reasonable collection practices
- Financial education and counseling

## Consumer Protection

- Fair and transparent pricing
- Clear contract terms
- Effective complaint handling mechanisms
- Protecting customer privacy

## Continuous Improvement

We continuously improve compliance management:

- Regular compliance training
- Internal audits
- External compliance assessments
- Policy updates

## Complaint Channels

**Complaint Email**: complaints@sulucash.com  
**Complaint Hotline**: +254 700 000 002  
**Regulatory Complaints**: Central Bank of Kenya`
    },
    risk: {
      title: 'Risk Disclosure',
      lastUpdated: 'January 1, 2024',
      content: `# Risk Disclosure

## Important Notice

Borrowing involves risks. Please consider carefully before applying.

## Main Risks

### 1. Interest Rate Risk
- Loans generate interest expenses
- Late payments will incur additional fees
- May affect your financial situation

### 2. Credit Risk
- Late repayment affects credit records
- May impact future borrowing ability
- Credit records will be reported to credit bureaus

### 3. Financial Risk
- May lead to financial difficulties
- Affects daily living expenses
- Increased debt burden

## Responsible Borrowing Advice

### Assess Repayment Capacity
- Calculate your monthly income and expenses
- Ensure sufficient repayment capacity
- Consider the impact of unexpected events

### Reasonable Use of Loans
- Only borrow necessary amounts
- Use for legal and reasonable purposes
- Avoid repeated borrowing

### Timely Repayment
- Set repayment reminders
- Ensure sufficient account balance
- Contact us immediately if difficulties arise

## Seeking Help

If you encounter repayment difficulties:

1. **Contact Us Immediately**
   - Customer Service Hotline: +254 700 000 000
   - Email: support@sulucash.com

2. **Seek Professional Advice**
   - Financial advisor consultation
   - Debt management advice

3. **Consider Other Options**
   - Discuss with family and friends
   - Seek other funding sources

## Free Financial Education

We provide free financial education resources:

- Budget management tips
- Savings advice
- Debt management guidance
- Financial planning

Please remember: Borrowing is an important financial decision. Please choose carefully based on your actual situation.`
    }
  };

  useEffect(() => {
    if (type && documentConfigs[type as keyof typeof documentConfigs]) {
      const config = documentConfigs[type as keyof typeof documentConfigs];
      setTitle(config.title);
      setLastUpdated(config.lastUpdated);
      setContent(config.content);
    }
  }, [type]);

  if (!type || !documentConfigs[type as keyof typeof documentConfigs]) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Document Not Found</h1>
          <p className="text-gray-600 mt-4">Please check if the URL is correct</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Document Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-primary-600" />
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Document Content */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-600">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900">{children}</strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary-200 pl-4 italic text-gray-700 my-4">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      {children}
                    </code>
                  )
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary-50 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-primary-800 mb-3">
              Need Help?
            </h3>
            <p className="text-primary-700 mb-4">
              If you have any questions about this document, please feel free to contact our customer service team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:legal@sulucash.com"
                className="text-primary-600 hover:text-primary-800 font-medium"
              >
                📧 legal@sulucash.com
              </a>
              <a
                href="tel:+254700000000"
                className="text-primary-600 hover:text-primary-800 font-medium"
              >
                📞 +254 700 000 000
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocumentPage;

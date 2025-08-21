'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, ArrowLeft, Home, User, MessageSquare } from 'lucide-react';
import { OfferFormData } from '@/types';

const propertySchema = z.object({
  address: z.string().min(5, 'Please enter a valid address'),
  city: z.string().min(2, 'Please enter a city'),
  state: z.string().min(2, 'Please enter a state'),
  zipCode: z.string().min(5, 'Please enter a valid ZIP code'),
  propertyType: z.enum(['single-family', 'condo', 'townhouse', 'multi-family', 'other']),
  bedrooms: z.number().min(0, 'Please enter number of bedrooms'),
  bathrooms: z.number().min(0, 'Please enter number of bathrooms'),
  squareFootage: z.number().optional(),
  yearBuilt: z.number().optional(),
  condition: z.enum(['excellent', 'good', 'fair', 'poor', 'needs-repair']),
  timeline: z.enum(['asap', '30-days', '60-days', '90-days', 'flexible']),
});

const contactSchema = z.object({
  firstName: z.string().min(2, 'Please enter your first name'),
  lastName: z.string().min(2, 'Please enter your last name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  preferredContact: z.enum(['phone', 'email', 'text']),
});

const finalSchema = z.object({
  additionalInfo: z.string().optional(),
  marketing: z.boolean().optional(),
});

const steps = [
  {
    id: 1,
    title: 'Property Details',
    description: 'Tell us about your property',
    icon: Home,
  },
  {
    id: 2,
    title: 'Contact Information',
    description: 'How can we reach you?',
    icon: User,
  },
  {
    id: 3,
    title: 'Additional Details',
    description: 'Anything else we should know?',
    icon: MessageSquare,
  },
];

export function GetOfferForm({ initialAddress }: { initialAddress?: string }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const propertyForm = useForm<z.infer<typeof propertySchema>>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      address: initialAddress || '',
      city: '',
      state: 'NC',
      zipCode: '',
      bedrooms: 3,
      bathrooms: 2,
      condition: 'good',
      timeline: '30-days',
    },
  });

  const contactForm = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: 'phone',
    },
  });

  const finalForm = useForm<z.infer<typeof finalSchema>>({
    resolver: zodResolver(finalSchema),
    defaultValues: {
      marketing: false,
    },
  });

  const handleNextStep = async () => {
    let isValid = false;
    
    if (currentStep === 1) {
      isValid = await propertyForm.trigger();
    } else if (currentStep === 2) {
      isValid = await contactForm.trigger();
    } else if (currentStep === 3) {
      isValid = await finalForm.trigger();
    }

    if (isValid && currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else if (isValid && currentStep === 3) {
      await handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const formData: OfferFormData = {
        ...propertyForm.getValues(),
        ...contactForm.getValues(),
        ...finalForm.getValues(),
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="p-8">
          <CardContent>
            <CheckCircle className="h-16 w-16 text-[#27AE60] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#2B3A67] mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We've received your information and will review your property details. 
              Expect to hear from us within 24 hours with your cash offer.
            </p>
            <div className="bg-[#F5F5F5] rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-[#2B3A67] mb-2">What happens next?</h3>
              <ol className="text-sm text-gray-600 space-y-2 text-left">
                <li>1. We'll research your property and local market</li>
                <li>2. Our team will prepare a fair cash offer</li>
                <li>3. We'll contact you within 24 hours to discuss</li>
                <li>4. If you accept, we can close in as little as 7 days</li>
              </ol>
            </div>
            <p className="text-sm text-gray-500">
              Questions? Call us directly at{' '}
              <a href="tel:+12522580913" className="text-[#4A90E2] font-semibold">
                (252) 258-0913
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          
          return (
            <div key={step.id} className="flex items-center">
              <div className={`flex flex-col items-center ${step.id < steps.length ? 'mr-8' : ''}`}>
                <div className={`
                  flex items-center justify-center w-12 h-12 rounded-full border-2 mb-2
                  ${isActive ? 'border-[#4A90E2] bg-[#4A90E2] text-white' : ''}
                  ${isCompleted ? 'border-[#27AE60] bg-[#27AE60] text-white' : ''}
                  ${!isActive && !isCompleted ? 'border-gray-300 text-gray-400' : ''}
                `}>
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <Icon className="h-6 w-6" />
                  )}
                </div>
                <div className="text-center">
                  <p className={`text-sm font-medium ${isActive ? 'text-[#4A90E2]' : isCompleted ? 'text-[#27AE60]' : 'text-gray-400'}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </div>
              {step.id < steps.length && (
                <div className={`w-16 h-0.5 mb-8 ${currentStep > step.id ? 'bg-[#27AE60]' : 'bg-gray-300'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Form Content */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-[#2B3A67]">
            {steps[currentStep - 1].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Property Details */}
          {currentStep === 1 && (
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="address">Property Address *</Label>
                  <Input
                    id="address"
                    placeholder="123 Main Street"
                    {...propertyForm.register('address')}
                  />
                  {propertyForm.formState.errors.address && (
                    <p className="text-sm text-red-600 mt-1">
                      {propertyForm.formState.errors.address.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="Charlotte"
                    {...propertyForm.register('city')}
                  />
                  {propertyForm.formState.errors.city && (
                    <p className="text-sm text-red-600 mt-1">
                      {propertyForm.formState.errors.city.message}
                    </p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Select onValueChange={(value) => propertyForm.setValue('state', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="NC" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NC">North Carolina</SelectItem>
                        <SelectItem value="SC">South Carolina</SelectItem>
                        <SelectItem value="VA">Virginia</SelectItem>
                        <SelectItem value="TN">Tennessee</SelectItem>
                        <SelectItem value="GA">Georgia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      placeholder="28202"
                      {...propertyForm.register('zipCode')}
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select onValueChange={(value) => propertyForm.setValue('propertyType', value as any)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">Single Family Home</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="multi-family">Multi-Family</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="bedrooms">Bedrooms *</Label>
                    <Input
                      id="bedrooms"
                      type="number"
                      min="0"
                      {...propertyForm.register('bedrooms', { valueAsNumber: true })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="bathrooms">Bathrooms *</Label>
                    <Input
                      id="bathrooms"
                      type="number"
                      min="0"
                      step="0.5"
                      {...propertyForm.register('bathrooms', { valueAsNumber: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="condition">Property Condition *</Label>
                  <Select onValueChange={(value) => propertyForm.setValue('condition', value as any)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent - Move-in ready</SelectItem>
                      <SelectItem value="good">Good - Minor updates needed</SelectItem>
                      <SelectItem value="fair">Fair - Some repairs needed</SelectItem>
                      <SelectItem value="poor">Poor - Major repairs needed</SelectItem>
                      <SelectItem value="needs-repair">Needs Significant Repair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeline">Selling Timeline *</Label>
                  <Select onValueChange={(value) => propertyForm.setValue('timeline', value as any)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you want to close?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (within 2 weeks)</SelectItem>
                      <SelectItem value="30-days">Within 30 days</SelectItem>
                      <SelectItem value="60-days">Within 60 days</SelectItem>
                      <SelectItem value="90-days">Within 90 days</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    {...contactForm.register('firstName')}
                  />
                  {contactForm.formState.errors.firstName && (
                    <p className="text-sm text-red-600 mt-1">
                      {contactForm.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    {...contactForm.register('lastName')}
                  />
                  {contactForm.formState.errors.lastName && (
                    <p className="text-sm text-red-600 mt-1">
                      {contactForm.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...contactForm.register('email')}
                  />
                  {contactForm.formState.errors.email && (
                    <p className="text-sm text-red-600 mt-1">
                      {contactForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(252) 258-0913"
                    {...contactForm.register('phone')}
                  />
                  {contactForm.formState.errors.phone && (
                    <p className="text-sm text-red-600 mt-1">
                      {contactForm.formState.errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="preferredContact">Preferred Contact Method *</Label>
                <Select onValueChange={(value) => contactForm.setValue('preferredContact', value as any)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How should we contact you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="text">Text Message</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <form className="space-y-4">
              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Is there anything else we should know about your property or situation? (Optional)"
                  className="min-h-[100px]"
                  {...finalForm.register('additionalInfo')}
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="marketing"
                  className="mt-1"
                  {...finalForm.register('marketing')}
                />
                <Label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed">
                  I agree to receive marketing communications from Solution 2 Properties. 
                  You can unsubscribe at any time.
                </Label>
              </div>
            </form>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className="flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <Button
              type="button"
              onClick={handleNextStep}
              disabled={isSubmitting}
              className="bg-[#4A90E2] hover:bg-[#357ABD] text-white flex items-center"
            >
              {isSubmitting ? (
                'Submitting...'
              ) : currentStep === 3 ? (
                'Submit & Get Offer'
              ) : (
                <>
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
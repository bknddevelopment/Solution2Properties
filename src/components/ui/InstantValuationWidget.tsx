'use client';

import { useState } from 'react';
import { Calculator, Home, DollarSign, TrendingUp, Loader2, MapPin, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ValuationData {
  address: string;
  estimatedValue: number;
  instantOffer: number;
  savingsVsAgent: number;
}

export function InstantValuationWidget() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [valuationData, setValuationData] = useState<ValuationData | null>(null);

  const calculateValuation = async () => {
    if (!address) return;
    
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock valuation logic
    const baseValue = 250000 + Math.random() * 350000;
    const instantOffer = baseValue * 0.92; // 92% of market value
    const savingsVsAgent = baseValue * 0.06; // 6% agent fees saved
    
    setValuationData({
      address,
      estimatedValue: Math.round(baseValue),
      instantOffer: Math.round(instantOffer),
      savingsVsAgent: Math.round(savingsVsAgent),
    });
    
    setLoading(false);
    setShowResults(true);
  };

  const resetWidget = () => {
    setShowResults(false);
    setAddress('');
    setValuationData(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-professional border border-gold/20 p-6">
      <div className="relative">
        {!showResults ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full mb-3">
                <Calculator className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="text-xl font-serif text-navy mb-2">Get Your Instant Offer</h3>
              <p className="text-gray-600 text-sm">No obligations. No fees. Just your home's value in seconds.</p>
            </div>
            
            {/* Input Form */}
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your property address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && calculateValuation()}
                  className="pl-10 pr-4 py-3 border-gray-300 text-gray-900"
                />
              </div>
              
              <Button
                onClick={calculateValuation}
                disabled={!address || loading}
                className="w-full btn-primary"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Calculating Your Offer...
                  </>
                ) : (
                  <>
                    Get Offer
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-gold">24hrs</div>
                  <div className="text-xs text-gray-600">Guaranteed Offer</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gold">$0</div>
                  <div className="text-xs text-gray-600">Fees or Commissions</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gold">7 Days</div>
                  <div className="text-xs text-gray-600">Fast Closing</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            {/* Results Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-3">
                <DollarSign className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-serif text-navy mb-1">Your Instant Offer</h3>
              <p className="text-gray-600 text-sm">{valuationData?.address}</p>
            </div>
            
            {/* Valuation Results */}
            <div className="space-y-3">
              {/* Market Value */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700 text-sm">Estimated Market Value</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    ${valuationData?.estimatedValue.toLocaleString()}
                  </div>
                </div>
              </div>
              
              {/* Instant Offer */}
              <div className="bg-gold/10 rounded-lg p-4 border border-gold/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-gold-dark" />
                      <span className="text-navy font-semibold">Our Offer</span>
                    </div>
                    <p className="text-xs text-gray-600">No fees, no repairs, no hassle</p>
                  </div>
                  <div className="text-2xl font-bold text-gold-dark">
                    ${valuationData?.instantOffer.toLocaleString()}
                  </div>
                </div>
              </div>
              
              {/* Savings */}
              <div className="bg-success/10 rounded-lg p-4 border border-success/30">
                <div className="flex items-center justify-between">
                  <span className="text-navy font-medium text-sm">You Save (vs. Traditional Sale)</span>
                  <div className="text-lg font-semibold text-success">
                    ${valuationData?.savingsVsAgent.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <Button
                asChild
                className="w-full btn-primary"
              >
                <a href="/get-offer">
                  Claim This Offer
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button
                onClick={resetWidget}
                variant="ghost"
                className="w-full text-gray-600 hover:text-gray-900"
              >
                Try Another Address
              </Button>
            </div>
            
            {/* Disclaimer */}
            <p className="mt-4 text-xs text-gray-500 text-center">
              This is a preliminary estimate. Final offer subject to property inspection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
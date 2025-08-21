'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calculator, Info } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CountUp from 'react-countup';

interface CalculatorInputs {
  homeValue: number;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  urgency: 'asap' | 'flexible' | 'exploring';
  repairs: number;
  owedMortgage: number;
}

export function HomeValueCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    homeValue: 350000,
    condition: 'good',
    urgency: 'flexible',
    repairs: 0,
    owedMortgage: 200000,
  });

  const [results, setResults] = useState({
    marketValue: 0,
    instantOffer: 0,
    netProceeds: 0,
    savingsVsRealtor: 0,
    daysToClose: 14,
  });

  // Calculate results whenever inputs change
  useEffect(() => {
    const calculateResults = () => {
      const { homeValue, condition, urgency, repairs, owedMortgage } = inputs;
      
      // Condition multipliers
      const conditionMultipliers = {
        excellent: 1.0,
        good: 0.95,
        fair: 0.88,
        poor: 0.80,
      };
      
      // Urgency multipliers
      const urgencyMultipliers = {
        asap: 0.92,
        flexible: 0.95,
        exploring: 0.93,
      };
      
      // Calculate market value after condition
      const marketValue = homeValue * conditionMultipliers[condition];
      
      // Calculate instant offer
      const baseOffer = marketValue * urgencyMultipliers[urgency];
      const instantOffer = Math.max(baseOffer - repairs, homeValue * 0.7); // Minimum 70% of home value
      
      // Calculate net proceeds
      const netProceeds = instantOffer - owedMortgage;
      
      // Calculate savings vs traditional sale (6% realtor fees + repairs)
      const savingsVsRealtor = (homeValue * 0.06) + repairs;
      
      // Days to close based on urgency
      const daysToClose = urgency === 'asap' ? 7 : urgency === 'flexible' ? 14 : 30;
      
      setResults({
        marketValue,
        instantOffer,
        netProceeds,
        savingsVsRealtor,
        daysToClose,
      });
    };

    calculateResults();
  }, [inputs]);


  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="glass-premium rounded-3xl p-8 shadow-premium-lg">
      <div className="mb-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full mb-4 shadow-gold"
        >
          <Calculator className="w-8 h-8 text-navy-dark" />
        </motion.div>
        <h3 className="text-3xl font-bold text-navy mb-2">Home Value Calculator</h3>
        <p className="text-gray-600">Get an instant estimate of your offer</p>
      </div>

      <div className="space-y-6">
        {/* Home Value Slider */}
        <div>
          <div className="flex justify-between items-baseline mb-3">
            <Label className="text-base font-semibold text-navy">Estimated Home Value</Label>
            <span className="text-2xl font-bold text-gold">{formatCurrency(inputs.homeValue)}</span>
          </div>
          <Slider
            value={[inputs.homeValue]}
            onValueChange={([value]: number[]) => setInputs({ ...inputs, homeValue: value })}
            min={100000}
            max={1000000}
            step={10000}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>$100K</span>
            <span>$1M</span>
          </div>
        </div>

        {/* Property Condition */}
        <div>
          <Label className="text-base font-semibold text-navy mb-3">Property Condition</Label>
          <Select
            value={inputs.condition}
            onValueChange={(value) => setInputs({ ...inputs, condition: value as CalculatorInputs['condition'] })}
          >
            <SelectTrigger className="w-full h-12 border-2 border-gray-200 hover:border-gold focus:border-gold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excellent">Excellent - Move-in Ready</SelectItem>
              <SelectItem value="good">Good - Minor Updates Needed</SelectItem>
              <SelectItem value="fair">Fair - Some Repairs Needed</SelectItem>
              <SelectItem value="poor">Poor - Major Repairs Needed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Selling Urgency */}
        <div>
          <Label className="text-base font-semibold text-navy mb-3">How Soon Do You Need to Sell?</Label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'asap', label: 'ASAP', desc: '7 days' },
              { value: 'flexible', label: 'Flexible', desc: '14 days' },
              { value: 'exploring', label: 'Just Exploring', desc: '30+ days' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setInputs({ ...inputs, urgency: option.value as CalculatorInputs['urgency'] })}
                className={`p-4 rounded-xl border-2 transition-all ${
                  inputs.urgency === option.value
                    ? 'border-gold bg-gold/10 shadow-sm'
                    : 'border-gray-200 hover:border-gold/50'
                }`}
              >
                <div className="font-semibold text-navy">{option.label}</div>
                <div className="text-sm text-gray-500">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Repair Costs */}
        <div>
          <div className="flex justify-between items-baseline mb-3">
            <Label className="text-base font-semibold text-navy">Estimated Repair Costs</Label>
            <span className="text-xl font-bold text-navy">{formatCurrency(inputs.repairs)}</span>
          </div>
          <Slider
            value={[inputs.repairs]}
            onValueChange={([value]: number[]) => setInputs({ ...inputs, repairs: value })}
            min={0}
            max={50000}
            step={1000}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>$0</span>
            <span>$50K</span>
          </div>
        </div>

        {/* Mortgage Owed */}
        <div>
          <Label className="text-base font-semibold text-navy mb-3">Remaining Mortgage Balance</Label>
          <Input
            type="number"
            value={inputs.owedMortgage}
            onChange={(e) => setInputs({ ...inputs, owedMortgage: parseInt(e.target.value) || 0 })}
            className="h-12"
            placeholder="$0"
          />
        </div>
      </div>

      {/* Results Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 p-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl border border-gold/20"
      >
        <h4 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-gold" />
          Your Estimated Offer
        </h4>
        
        <div className="space-y-3">
          {/* Instant Offer */}
          <div className="flex justify-between items-center p-4 bg-white/80 rounded-xl">
            <span className="text-gray-600">Offer</span>
            <span className="text-3xl font-bold text-gold">
              $<CountUp end={results.instantOffer} duration={1.5} separator="," />
            </span>
          </div>
          
          {/* Net Proceeds */}
          <div className="flex justify-between items-center p-4 bg-white/80 rounded-xl">
            <span className="text-gray-600">Your Net Proceeds</span>
            <span className={`text-2xl font-bold ${results.netProceeds >= 0 ? 'text-emerald' : 'text-red-500'}`}>
              $<CountUp end={Math.abs(results.netProceeds)} duration={1.5} separator="," />
            </span>
          </div>
          
          {/* Savings */}
          <div className="flex justify-between items-center p-4 bg-emerald/10 rounded-xl border border-emerald/20">
            <span className="text-gray-600">You Save vs. Traditional Sale</span>
            <span className="text-xl font-bold text-emerald">
              $<CountUp end={results.savingsVsRealtor} duration={1.5} separator="," />
            </span>
          </div>
          
          {/* Closing Time */}
          <div className="flex justify-between items-center p-4 bg-navy/10 rounded-xl">
            <span className="text-gray-600">Days to Close</span>
            <span className="text-xl font-bold text-navy">
              <CountUp end={results.daysToClose} duration={1} /> days
            </span>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-4 p-3 bg-white/60 rounded-lg flex gap-2">
          <Info className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-gray-600">
            This is an estimate only. Final offer will be provided after property assessment.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
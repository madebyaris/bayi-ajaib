"use client";

import { useState } from "react";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export const ROICalculator = () => {
  const [roiInputs, setRoiInputs] = useState({
    currentHireCost: 8000,
    timeToHire: 45,
    positionsPerYear: 12,
  });

  const ourService = {
    costPerHire: 6000,
    timeToHire: 21,
    successRate: 0.92,
  };

  const calculateSavings = () => {
    const currentAnnualCost = roiInputs.currentHireCost * roiInputs.positionsPerYear;
    const ourAnnualCost = ourService.costPerHire * roiInputs.positionsPerYear;
    const costSavings = currentAnnualCost - ourAnnualCost;
    
    const timeSavingsPerHire = roiInputs.timeToHire - ourService.timeToHire;
    const totalTimeSavings = timeSavingsPerHire * roiInputs.positionsPerYear;
    
    const productivityGain = (timeSavingsPerHire / roiInputs.timeToHire) * 0.3 * roiInputs.currentHireCost * roiInputs.positionsPerYear;
    
    return {
      costSavings,
      totalTimeSavings,
      productivityGain,
      totalROI: costSavings + productivityGain,
      roiPercentage: ((costSavings + productivityGain) / currentAnnualCost) * 100,
    };
  };

  const savings = calculateSavings();

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">ROI Calculator</h3>
          <p className="text-neutral-600">See how much you could save with our services</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Current Cost Per Hire (USD)
          </label>
          <input
            type="number"
            value={roiInputs.currentHireCost}
            onChange={(e) => setRoiInputs(prev => ({ ...prev, currentHireCost: Number(e.target.value) }))}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            min="1000"
            max="50000"
            step="500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Current Time to Hire (days)
          </label>
          <input
            type="number"
            value={roiInputs.timeToHire}
            onChange={(e) => setRoiInputs(prev => ({ ...prev, timeToHire: Number(e.target.value) }))}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            min="10"
            max="180"
            step="5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Positions Per Year
          </label>
          <input
            type="number"
            value={roiInputs.positionsPerYear}
            onChange={(e) => setRoiInputs(prev => ({ ...prev, positionsPerYear: Number(e.target.value) }))}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            min="1"
            max="100"
            step="1"
          />
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="text-center mb-4">
          <h4 className="text-2xl font-bold text-green-800 mb-2">Your Annual Savings</h4>
          <div className="flex items-center justify-center gap-2">
            <DollarSign className="w-8 h-8 text-green-600" />
            <span className="text-4xl font-bold text-green-600">
              ${savings.totalROI.toLocaleString()}
            </span>
          </div>
          <p className="text-green-700 font-medium">
            {savings.roiPercentage.toFixed(1)}% ROI improvement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-neutral-900">
              ${savings.costSavings.toLocaleString()}
            </p>
            <p className="text-sm text-neutral-600">Direct Cost Savings</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-neutral-900">
              {savings.totalTimeSavings} days
            </p>
            <p className="text-sm text-neutral-600">Time Saved</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-neutral-900">
              ${savings.productivityGain.toLocaleString()}
            </p>
            <p className="text-sm text-neutral-600">Productivity Gains</p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 rounded-lg p-4">
        <h5 className="font-semibold mb-2">Comparison: Your Current vs Our Service</h5>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-neutral-700">Your Current Process:</p>
            <ul className="space-y-1 text-neutral-600">
              <li>• Cost per hire: ${roiInputs.currentHireCost.toLocaleString()}</li>
              <li>• Time to hire: {roiInputs.timeToHire} days</li>
              <li>• Annual cost: ${(roiInputs.currentHireCost * roiInputs.positionsPerYear).toLocaleString()}</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium text-neutral-700">With Our Service:</p>
            <ul className="space-y-1 text-neutral-600">
              <li>• Cost per hire: ${ourService.costPerHire.toLocaleString()}</li>
              <li>• Time to hire: {ourService.timeToHire} days</li>
              <li>• Success rate: {(ourService.successRate * 100)}%</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Get Detailed ROI Report
          <TrendingUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

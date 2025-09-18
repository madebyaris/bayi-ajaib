"use client";

import { useState } from "react";
import { jobListings } from "@/data";
import { Search, MapPin, Clock, Briefcase, ExternalLink } from "lucide-react";

export const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const locations = [...new Set(jobListings.map(job => job.location))];
  const levels = [...new Set(jobListings.map(job => job.level))];
  const industries = [...new Set(jobListings.map(job => job.industry))];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || job.location === selectedLocation;
    const matchesLevel = !selectedLevel || job.level === selectedLevel;
    const matchesIndustry = !selectedIndustry || job.industry === selectedIndustry;
    
    return matchesSearch && matchesLocation && matchesLevel && matchesIndustry;
  });

  return (
    <div className="space-y-8">
      {/* Search Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">All Levels</option>
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">All Industries</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-neutral-600">
          <span>
            {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          </span>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedLocation("");
              setSelectedLevel("");
              setSelectedIndustry("");
            }}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{job.title}</h3>
                    <p className="text-lg text-neutral-700 font-medium">{job.company}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    {job.type}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.level}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Posted {job.postedDate}
                  </div>
                </div>
                
                <p className="text-neutral-700 mb-4 line-clamp-2">{job.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {job.skills.slice(0, 4).map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="text-neutral-500 text-xs">
                      +{job.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2 lg:ml-6">
                <div className="text-right">
                  <p className="text-xl font-bold text-neutral-900">
                    {job.currency} {job.salaryMin.toLocaleString()} - {job.salaryMax.toLocaleString()}
                  </p>
                  <p className="text-sm text-neutral-600">per year</p>
                </div>
                
                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Apply Now
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-medium hover:bg-neutral-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No jobs found</h3>
            <p className="text-neutral-600 mb-4">
              Try adjusting your search criteria or clearing some filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedLocation("");
                setSelectedLevel("");
                setSelectedIndustry("");
              }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import { useState } from 'react';
import { mockSiteReports, mockProjects } from '@/lib/mockData';
import { Upload, Calendar, User, Cloud, Users as UsersIcon, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function Reports() {
  const [isUploading, setIsUploading] = useState(false);
  const [notes, setNotes] = useState('');

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      toast.success('Daily report uploaded successfully!');
      setNotes('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-construction-black mb-2">
            Site Reports & Documentation
          </h1>
          <p className="text-lg text-gray-600">
            Upload daily progress photos and site reports
          </p>
        </div>

        {/* Upload Section */}
        <Card className="mb-12 border-l-4 border-construction-yellow construction-shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Upload className="h-6 w-6 text-construction-yellow" />
              Upload New Report
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Project Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project
              </label>
              <select className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none">
                {mockProjects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Site Photos
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-construction-yellow transition-colors cursor-pointer bg-gray-50">
                <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG or HEIC up to 10MB each (mocked)
                </p>
              </div>
            </div>

            {/* Weather & Workers Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Weather Conditions
                </label>
                <div className="relative">
                  <Cloud className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="e.g., Sunny, 72°F"
                    className="pl-10 border-2 focus:border-construction-yellow"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Workers Present
                </label>
                <div className="relative">
                  <UsersIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="Number of workers"
                    className="pl-10 border-2 focus:border-construction-yellow"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Progress Notes
              </label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe today's work progress, any issues encountered, materials used, safety incidents, etc."
                className="min-h-32 border-2 focus:border-construction-yellow resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleUpload}
              disabled={isUploading}
              className="w-full bg-construction-yellow hover:bg-construction-yellow/90 text-construction-black font-bold py-6 text-lg"
            >
              {isUploading ? 'Uploading...' : 'Upload Daily Report'}
            </Button>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <div>
          <h2 className="text-2xl font-bold text-construction-black mb-6 flex items-center gap-2">
            <div className="h-1 w-12 bg-construction-yellow"></div>
            Recent Reports
          </h2>

          <div className="space-y-6">
            {mockSiteReports.map((report) => (
              <Card key={report.id} className="border-l-4 border-construction-yellow hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Images */}
                    <div className="lg:w-1/3">
                      <div className="grid grid-cols-2 gap-2">
                        {report.images.map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`Site photo ${idx + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">
                            {new Date(report.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{report.uploadedBy}</span>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">{report.notes}</p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                          <Cloud className="h-4 w-4 text-blue-600" />
                          <span className="font-medium text-blue-900">{report.weather}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                          <UsersIcon className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-900">
                            {report.workersPresent} Workers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-construction-yellow/10 border-l-4 border-construction-yellow rounded-lg">
          <h3 className="text-lg font-bold text-construction-black mb-2">
            📸 Daily Report Guidelines
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>• <strong>Photo Documentation:</strong> Capture progress from multiple angles, including wide shots and detail views</p>
            <p>• <strong>Weather Tracking:</strong> Record conditions that may impact work progress or material curing</p>
            <p>• <strong>Progress Notes:</strong> Document completed tasks, challenges faced, and next steps</p>
            <p>• <strong>Safety Incidents:</strong> Report any safety concerns or incidents immediately</p>
            <p>• <strong>Material Usage:</strong> Note major material deliveries and consumption (uploads currently mocked)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

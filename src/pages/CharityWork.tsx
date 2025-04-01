import React from 'react';
import { ExternalLink } from 'lucide-react';

export function CharityWork() {
  const ukCharities = [
    {
      name: "Visit Churches",
      description: "Helps maintain and conserve Britain's historic churches",
      url: "https://visitchurches.org.uk"
    },
    {
      name: "Christian Concern",
      description: "Engages on a wide range of issues which affect UK society",
      url: "https://christianconcern.com/issues"
    }
  ];

  const localInitiatives = [
    {
      name: "Street Pastors",
      description: "Supporting vulnerable people in urban areas",
      url: "https://www.streetpastors.org"
    },
    {
      name: "Food Bank Aid",
      description: "Helping local communities in need",
      url: "https://foodbankaid.org.uk/what-we-do/"
    },
    {
      name: "North Enfield Food Bank",
      description: "Local food bank serving the North Enfield community",
      url: "https://northenfield.foodbank.org.uk"
    }
  ];

  const internationalWork = [
    {
      name: "Supporting Persecuted Christians",
      description: "Providing aid and support to Christians in poverty-stricken regions",
      activities: [
        "Emergency relief support",
        "Bible distribution",
        "Community development projects"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold text-warm-900">Charity Work</h1>

      {/* UK Charity Work */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-warm-800 mb-6">Charity Work in the UK</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-warm-800 mb-4">Local Initiatives</h3>
            <div className="space-y-4">
              {localInitiatives.map((initiative, index) => (
                <a
                  key={index}
                  href={initiative.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-warm-900">{initiative.name}</h4>
                      <p className="text-warm-600 text-sm mt-1">{initiative.description}</p>
                    </div>
                    <ExternalLink className="text-warm-600" size={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-warm-800 mb-4">Helpful Charity Links</h3>
            <div className="space-y-4">
              {ukCharities.map((charity, index) => (
                <a
                  key={index}
                  href={charity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-warm-900">{charity.name}</h4>
                      <p className="text-warm-600 text-sm mt-1">{charity.description}</p>
                    </div>
                    <ExternalLink className="text-warm-600" size={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Missions */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-warm-800 mb-6">International Missions</h2>
        <div className="space-y-6">
          {internationalWork.map((work, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium text-warm-800 mb-4">{work.name}</h3>
              <p className="text-warm-600 mb-4">{work.description}</p>
              <ul className="space-y-2">
                {work.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="text-warm-600">• {activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default () => {

  const tableItems = [
      {
          name: "Appliance Repair",
          desc: "Minor repairs for appliances such as refrigerators, washing machines, dryers, and dishwashers."
      },
      {
          name: "Basic HVAC Maintenance",
          desc: "Replacing air filters and performing simple HVAC system checks."
      },
      {
        name: "Carpentry",
        desc: "Repairing or installing shelves, cabinets, doors, windows, and trim work."
    },
    {
        name: "Deck and Fence Repair",
        desc: " Fixing loose boards, replacing damaged sections, and staining or sealing wood surfaces."
    },
    {
        name: "Drywall and Plaster Repair",
        desc: " Patching holes, cracks, and water damage in walls or ceilings.        "
    },
    {
        name: "Electrical        ",
        desc: " Replacing light fixtures, outlets, switches, and troubleshooting electrical issues (for minor repairs).        "
    },
    {
        name: "Emergency Repairs        ",
        desc: " Responding to urgent issues like water leaks, electrical outages, or security breaches.        "
    },
    {
        name: "Flooring        ",
        desc: " Repairing or replacing damaged flooring, including hardwood, laminate, tile, and vinyl.        "
    },
    {
        name: "Furniture Assembly        ",
        desc: " Putting together flat-pack furniture and mounting shelves or cabinets.        "
    },
    {
        name: "Gutter Repair and Cleaning        ",
        desc: " Clearing debris from gutters and repairing minor issues like leaks.        "
    },
    {
        name: "Home Insulation        ",
        desc: " Adding or replacing insulation in attics, walls, and crawl spaces.        "
    },
    {
        name: "Home Maintenance        ",
        desc: " Performing routine maintenance tasks like gutter cleaning, pressure washing, and roof repairs (minor).        "
    },
    {
      name: "Home Safety      ",
      desc: " Installing smoke detectors, carbon monoxide detectors, and childproofing measures.      "
  },
  {
    name: "Minor Landscaping    ",
    desc: " Trimming bushes, planting flowers, and general yard maintenance.    "
},
{
  name: "Painting  ",
  desc: " Interior and exterior painting, including touch-ups and repainting walls or ceilings.  "
},
{
  name: "Plumbing  ",
  desc: " Fixing minor leaks, unclogging drains, replacing faucets, and installing new fixtures.  "
},
{
  name: "Pressure Washing  ",
  desc: " Cleaning driveways, decks, siding, and other surfaces with a pressure washer.  "
},
{
  name: "Small Plumbing and Electrical Jobs  ",
  desc: " Installing ceiling fans, light fixtures, and fixing minor plumbing issues like a running toilet.  "
},
{
  name: "Tiling  ",
  desc: " Installing or repairing ceramic, porcelain, or other types of tiles for floors, walls, and backsplashes.  "
},
{
  name: "Window and Door Repair  ",
  desc: " Adjusting or replacing hinges, handles, locks, and weatherstripping.  "
},
  ]

  return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-lg">
              <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                  Services description
              </h3>
              <p className="text-gray-600 mt-2">
              Handymen are typically skilled in a wide range of tasks and services related to home repair, maintenance, and improvement. Here is a list of common services that handymen often cover:
              </p>
          </div>
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto mb-10">
              <table className="w-full table-auto text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                      <tr>
                          <th className="py-3 px-6">Service name</th>
                          <th className="py-3 px-6">Description</th>
                      </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y">
                      {
                          tableItems.map((item, idx) => (
                              <tr key={idx}>
                                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{item.desc}</td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>
          </div>
      </div>
  )
}
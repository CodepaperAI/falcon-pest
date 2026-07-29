// Company Configuration
export const companyConfig = {
  name: "Falcon Pest Control",
  phone: "289-990-5828",
  phoneRaw: "+12899905828",
  email: "falconexterminators@gmail.com",
  address: "4551 Zimmerman Ave, Niagara Falls, ON L2E 3M5, Canada", // ← add street + postal code if you have a public office
  serviceArea: "Serving Niagara & Hamilton Region",
  hours: {
    weekday: "8:00 AM - 7:00 PM", // Mon–Sat per your banner
    weekend: "Closed Sunday",      // ← confirm
  },
  social: {
    // ← delete any that don't exist; dead links fail QA
    facebook: "https://facebook.com/falconpestcontrol",
    instagram: "https://instagram.com/falconpestcontrol",
  },
  // Set true ONLY once every URL in `social` above has been opened and confirmed
  // to be Falcon's real profile. Until then these are placeholder handles, and
  // emitting them in Organization.sameAs would assert ownership of accounts
  // Falcon may not control.
  socialVerified: false,
};

export default companyConfig;
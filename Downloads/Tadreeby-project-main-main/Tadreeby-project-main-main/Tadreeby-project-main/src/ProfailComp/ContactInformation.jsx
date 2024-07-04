function ContactForm() {
  // Values are fixed, corresponding to the disabled inputs
  const email = 'email@example.com'; // Replace with actual email if needed
  const phoneNumber = '0535901666'; // Replace with actual phone number if needed

  return (
    <form className="max-w-full mx-auto flex flex-wrap justify-between items-center">
      <div className="flex-1 min-w-[calc(50%-1rem)] mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            الإيميل الجامعي:
            </label>
            <input
                type="email"
                id="email"
                value={email}
                disabled
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
      </div>

      <div className="flex-1 min-w-[calc(50%-1rem)] mb-4 mr-3">
            <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            رقم الجوال:
            </label>
            <input
                type="text"
                id="PhoneNumber"
                value={phoneNumber}
                disabled
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    </form>
  );
}

export default ContactForm;
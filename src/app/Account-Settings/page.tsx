// "use client";
// import React, { useState } from 'react';

// type Language = 'English' | 'Spanish';

// interface AccountSettingsForm {
//   firstName: string;
//   lastName: string;
//   age: number | '';
//   password: string;
//   defaultLanguage: Language;
//   targetLanguage: Language;
// }

// const AccountSettingsPage: React.FC = () => {
//   const [formData, setFormData] = useState<AccountSettingsForm>({
//     firstName: '',
//     lastName: '',
//     age: '',
//     password: '',
//     defaultLanguage: 'English',
//     targetLanguage: 'Spanish',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: name === 'age' ? parseInt(value) || '' : value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//     // Here you would typically send the form data to a server
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 bg-white text-black">
//       <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             id="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             id="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="age" className="block text-sm font-medium text-gray-900">Age</label>
//           <input
//             type="number"
//             name="age"
//             id="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="defaultLanguage" className="block text-sm font-medium text-gray-900">Default Language</label>
//           <select
//             name="defaultLanguage"
//             id="defaultLanguage"
//             value={formData.defaultLanguage}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           >
//             <option value="English">English</option>
//             <option value="Spanish">Spanish</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="targetLanguage" className="block text-sm font-medium text-gray-900">Target Language</label>
//           <select
//             name="targetLanguage"
//             id="targetLanguage"
//             value={formData.targetLanguage}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           >
//             <option value="English">English</option>
//             <option value="Spanish">Spanish</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AccountSettingsPage;


const AccountSettings = () => {
    return(<div>
        Hi
    </div>)
}

export default AccountSettings;
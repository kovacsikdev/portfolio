import React, { useState, useEffect } from 'react';
import { tableData } from './chartData';

const Table: React.FC = () => {
  const [data, setData] = useState(tableData);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string }>({ key: 'id', direction: 'ascending' });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    sortData('id');
  }, []);

  const sortData = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter(user => 
    user.message.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter message"
        className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className="overflow-y-auto border border-gray-300 rounded-lg w-full h-full border-gray-600 mt-2">
        <table className="min-w-full divide-y divide-gray-200 divide-gray-700">
          <thead className="bg-gray-50 sticky top-0 bg-gray-800">
            <tr>
              <th
                className="p-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer text-gray-300"
                onClick={() => sortData('id')}
              >
                ID {getSortIcon('id')}
              </th>
              <th
                className="p-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer text-gray-300"
                onClick={() => sortData('userId')}
              >
                User ID {getSortIcon('userId')}
              </th>
              <th
                className="p-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer text-gray-300"
                onClick={() => sortData('message')}
              >
                Message {getSortIcon('message')}
              </th>
              <th
                className="p-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer text-gray-300"
                onClick={() => sortData('completed')}
              >
                Completed {getSortIcon('completed')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 bg-gray-900 divide-gray-700">
            {filteredData.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 hover:bg-gray-800">
                <td className="p-4 py-4800 text-sm text-gray-500 text-gray-300">{user.id}</td>
                <td className="p-4 py-4800 text-sm text-gray-500 text-gray-300">{user.userId}</td>
                <td className="p-4 py-4800 text-sm text-gray-500 text-gray-300">{user.message}</td>
                <td className="p-4 py-4800 text-sm text-gray-500 text-gray-300">{user.completed.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

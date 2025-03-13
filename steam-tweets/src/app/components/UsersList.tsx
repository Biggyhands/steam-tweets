export default function UsersList({ data }) {
  return (
    <div>
      <ul className="space-y-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.map((user) => (
          <li
            key={user.id}
            className="bg-[#2c3441] p-2 flex items-center cursor-pointer hover:shadow-xl   transition-shadow duration-200"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-[#171a21] mr-2">
              <span className="text-white text-lg font-bold">?</span>
            </div>
            <div>
              <div className="text-blue-400 text-sm font-semibold">
                {user.username}
              </div>
              <div className="text-[#c6d4df] text-xs">{user.name}</div>
              <div className="text-[#c6d4df] text-xs">{user.email}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

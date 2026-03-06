import useUser from "./useUser"

export default function UserAvatar() {
  const { user } = useUser();
  const {fullName,email,avatar } = user.user_metadata;
  return (
    <div
      className="flex gap-5 items-center font-bold text-xl text-stone-600  dark:bg-gray-800 dark:text-gray-200"
    >
      <img
        className="block w-15 h-15 aspect-auto-1 object-cover  object-center rounded-full outline-stone-400 "
        src={`${avatar || '/default-user.jpg'}`}
        alt={`Avatart-${fullName}`}
      />
      <h2
        className="text-2xl"
      >Welcome Back {fullName} </h2>
    </div>
  )
}

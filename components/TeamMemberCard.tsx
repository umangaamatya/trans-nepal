interface TeamMemberCardProps {
  name: string;
  position: string;
  image?: string;
}

const TeamMemberCard = ({ name, position, image }: TeamMemberCardProps) => {
  return (
    <div className="flex items-center gap-8 bg-brand-light-blue rounded-2xl p-6 min-h-36">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={`${name} profile`} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
        )}
      </div>
      
      {/* Member Info */}
      <div className="flex-1">
        <div className="text-brand-blue font-poppins text-2xl font-normal leading-7 mb-2">
          {position}
        </div>
        <div className="text-brand-blue font-poppins text-2xl font-normal leading-7">
          {name}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

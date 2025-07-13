export interface CardProps {
  title: string;
  description: string; // ✅ add this line
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p> {/* ✅ uses the new prop */}
    </div>
  );
};

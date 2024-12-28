import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ShimmerCard = styled.div`
  position: relative;
  background-color: #e0e0e0;
  border-radius: 12px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  animation: ${shimmer} 1.5s infinite linear;
  background-image: linear-gradient(90deg, #f6f7f8 25%, #e0e0e0 50%, #f6f7f8 75%);
  background-size: 200% 100%;
`;

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {[...Array(8)].map((_, index) => (
        <ShimmerCard key={index}></ShimmerCard>
      ))}
    </div>
  );
};

export default Shimmer;

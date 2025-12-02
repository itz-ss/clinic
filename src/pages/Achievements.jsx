import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import { Container } from "react-bootstrap";
import AchievementGallery from "../components/AchievementGallery";
import { fetchAllAchievements } from "../services/strapi";

function Achievements() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAllAchievements().then(setData);
  }, []);

  return (
    <>
      <SEO
        title="Doctor's Name | Awards and Achievements"
        description="Discover Doctor's Name's achievements, recognitions, and contributions to the field of spine surgery."
        keywords="doctor achievements, medical awards, recognitions"
      />

      <Container className="py-4">
        <h2 className="mb-4 text-center">Achievements</h2>

        {!data && <p className="text-center">Loading...</p>}

        {data?.length === 0 && <p className="text-center">No achievements added yet.</p>}

        {data?.map((achievement) => (
          <div key={achievement.id} className="mb-5">
            <AchievementGallery achievement={achievement} />
          </div>
        ))}
      </Container>
    </>
  );
}

export default Achievements;

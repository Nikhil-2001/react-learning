import { useContext, useState } from 'react';

import { ChallengesContext } from '../store/challenges-context.jsx';
import ChallengeItem from './ChallengeItem.jsx';
import ChallengeTabs from './ChallengeTabs.jsx';
import { AnimatePresence, motion } from 'framer-motion';

export default function Challenges() {
  const { challenges } = useContext(ChallengesContext);
  const [selectedType, setSelectedType] = useState('active');
  const [expanded, setExpanded] = useState(null);

  function handleSelectType(newType) {
    setSelectedType(newType);
  }

  function handleViewDetails(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  }

  const filteredChallenges = {
    active: challenges.filter((challenge) => challenge.status === 'active'),
    completed: challenges.filter(
      (challenge) => challenge.status === 'completed'
    ),
    failed: challenges.filter((challenge) => challenge.status === 'failed'),
  };

  const displayedChallenges = filteredChallenges[selectedType];

  return (
    <div id="challenges">
      <ChallengeTabs
        challenges={filteredChallenges}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        <AnimatePresence mode='wait'>
          {displayedChallenges.length > 0 && (
            <AnimatePresence>
              <motion.ol key="list" exit={{ y: -30, opacity: 0 }} className="challenge-items">
                <AnimatePresence>
                  {displayedChallenges.map((challenge) => (
                    <ChallengeItem
                      key={challenge.id}
                      challenge={challenge}
                      onViewDetails={() => handleViewDetails(challenge.id)}
                      isExpanded={expanded === challenge.id}
                    />
                  ))}
                </AnimatePresence>
              </motion.ol>
            </AnimatePresence>
          )}
          {displayedChallenges.length === 0 && <p key="fallback">No challenges found.</p>}
        </AnimatePresence>
      </ChallengeTabs>
    </div>
  );
}

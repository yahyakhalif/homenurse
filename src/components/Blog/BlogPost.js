import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = styled.div`
  max-width: 800px;
  margin: 120px auto 60px;
  padding: 2rem;
`;

const BackButtonContainer = styled.div`
  position: fixed;
  left: 2rem;
  top: 100px;
  z-index: 10;
  width: fit-content;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media screen and (max-width: 1400px) {
    position: sticky;
    left: 0;
  }
`;

const BackButton = styled.button`
  display: inline-block;
  color: #01bf71;
  text-decoration: none;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PostTitle = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 2.5rem;
`;

const PostContent = styled.div`
  line-height: 1.8;
  color: #444;
  
  h2 {
    font-size: 2rem;
    color: #333;
    margin: 2rem 0 1rem;
    font-weight: 700;
  }
  
  h3 {
    font-size: 1.4rem;
    color: #444;
    margin: 1.5rem 0 1rem;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1.5rem;
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: 700;
    color: #333;
  }
`;

const PostDate = styled.div`
  color: #666;
  margin-bottom: 2rem;
`;

const formatContent = (content) => {
  return content
    .split('\n')
    .map(line => line.trim())
    .map(line => {
      if (line.includes('?') && !line.startsWith('#')) {
        return `<h2><strong>${line}</strong></h2>`;
      }
      if (line.startsWith('##') || line.startsWith('#')) {
        return `<h2><strong>${line.replace(/^#+\s*/, '').trim()}</strong></h2>`;
      }
      if (line.startsWith('###') || /^[A-Z][a-zA-Z\s]+:/.test(line)) {
        return `<h3><strong>${line.replace(/^###\s*/, '').trim()}</strong></h3>`;
      }
      if (/^\d+\./.test(line)) {
        return `<p><strong>${line}</strong></p>`;
      }
      return `<p>${line}</p>`;
    })
    .filter(line => line !== '<p></p>')
    .join('');
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('blog');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const mockPosts = {
      'understanding-home-healthcare': {
        title: 'Understanding Home Healthcare: A Comprehensive Guide',
        date: '15/12/2024',
        content: `
          Home healthcare has become an increasingly vital component of modern healthcare delivery, offering patients the opportunity to receive medical care in the comfort of their own homes. This comprehensive guide explores the benefits, processes, and considerations of home healthcare services.

          What is Home Healthcare?

          Home healthcare encompasses a wide range of medical services provided in a patient's home, rather than in a hospital or clinic setting. These services can include skilled nursing care, physical therapy, occupational therapy, and assistance with daily activities. The primary goal is to help patients recover, maintain their independence, and improve their quality of life while remaining in familiar surroundings.

          Benefits of Home Healthcare

          1. Comfort and Familiarity
          Patients receive care in their own environment, reducing stress and anxiety associated with hospitalization. This familiar setting often leads to better sleep, improved appetite, and faster recovery times.

          2. Personalized Care
          Healthcare providers can develop highly individualized care plans that take into account the patient's home environment, family support system, and specific needs. This personalized approach often results in better health outcomes.

          3. Cost-Effectiveness
          Home healthcare typically costs significantly less than extended hospital stays or nursing home care. This cost reduction benefits both patients and the healthcare system as a whole.

          4. Better Recovery Outcomes
          Research has shown that patients often recover more quickly at home, with lower rates of hospital readmission and complications. The comfortable environment and one-on-one attention contribute to these improved outcomes.

          How Home Healthcare Works

          The process typically begins with a physician's referral and a thorough assessment of the patient's needs. A team of healthcare professionals works together to create a comprehensive care plan that might include:

          - Regular visits from skilled nurses
          - Physical therapy sessions
          - Medication management
          - Wound care
          - Health monitoring
          - Patient and family education

          Healthcare providers work closely with patients and their families to ensure proper care delivery and to make adjustments as needed. They maintain communication with the patient's primary care physician and other healthcare providers to ensure coordinated care.

          Who Can Benefit from Home Healthcare?

          Home healthcare services are particularly beneficial for:
          - Seniors recovering from surgery or illness
          - Individuals with chronic conditions
          - People with disabilities
          - Patients requiring rehabilitation services
          - Those needing palliative or end-of-life care

          Choosing the Right Home Healthcare Provider

          When selecting a home healthcare provider, consider:
          - Accreditation and licensing
          - Range of services offered
          - Staff qualifications and experience
          - Available hours and emergency coverage
          - Insurance coverage and payment options
          - Patient reviews and testimonials

          Conclusion

          Home healthcare represents a vital evolution in medical care delivery, offering numerous benefits for patients and their families. By understanding these services and their advantages, you can make informed decisions about whether home healthcare is the right choice for you or your loved ones.
        `
      },
      'tips-for-caregivers': {
        title: 'Essential Tips for Caregivers: A Guide to Providing Quality Home Care',
        date: '20/11/2024',
        content: `
          Caregiving is both a rewarding and challenging responsibility that requires dedication, patience, and proper knowledge. This guide provides essential tips and best practices for caregivers to ensure they provide the best possible care while maintaining their own well-being.

          Understanding Your Role

          As a caregiver, you play multiple roles in your patient's life. You might be responsible for:
          - Personal care assistance
          - Medication management
          - Emotional support
          - Household management
          - Healthcare coordination
          - Transportation to appointments

          Essential Caregiving Tips

          1. Prioritize Communication
          Clear communication is crucial in caregiving. This includes:
          - Active listening to your patient's needs and concerns
          - Regular updates to family members
          - Clear documentation of care activities
          - Effective communication with healthcare providers

          2. Maintain a Safe Environment
          Safety should always be a top priority:
          - Remove fall hazards
          - Install proper lighting
          - Organize medications properly
          - Keep emergency numbers readily available
          - Consider mobility aids where necessary

          3. Practice Proper Self-Care
          Caregiver burnout is real and must be prevented:
          - Take regular breaks
          - Maintain your own health
          - Seek support when needed
          - Join caregiver support groups
          - Practice stress management techniques

          Daily Care Routines

          Establishing consistent routines helps both caregivers and patients:
          
          Morning Routine
          - Assistance with personal hygiene
          - Medication administration
          - Breakfast preparation
          - Light exercise or stretching
          - Activity planning for the day

          Throughout the Day
          - Regular hydration checks
          - Medication management
          - Activity supervision
          - Meal preparation
          - Social interaction

          Evening Routine
          - Dinner preparation
          - Evening medications
          - Personal care assistance
          - Comfortable positioning for sleep
          - Security checks

          Managing Common Challenges

          Caregivers often face various challenges that require specific approaches:

          1. Difficult Behaviors
          - Remain calm and patient
          - Identify triggers
          - Use distraction techniques
          - Seek professional guidance when needed

          2. Physical Demands
          - Use proper lifting techniques
          - Utilize available equipment
          - Know your physical limitations
          - Ask for help with demanding tasks

          Professional Development

          Continuing education is important for caregivers:
          - Attend training workshops
          - Learn new care techniques
          - Stay updated on medical conditions
          - Maintain necessary certifications

          Conclusion

          Quality caregiving requires dedication, knowledge, and the right approach. By following these guidelines and continuously learning, caregivers can provide excellent care while maintaining their own well-being.
        `
      },
      'healthcare-technology': {
        title: 'Healthcare Technology at Home: Innovations Transforming Patient Care',
        date: '25/08/2024',
        content: `
          The integration of technology in home healthcare is revolutionizing how we deliver and receive medical care. From remote monitoring devices to artificial intelligence-powered diagnostics, these innovations are making home healthcare more effective, efficient, and accessible than ever before.

          Current Technological Innovations:

          Remote Patient Monitoring (RPM):
          RPM devices allow healthcare providers to track patient vital signs and health metrics in real-time:
          - Blood pressure monitors
          - Heart rate sensors
          - Blood glucose meters
          - Sleep tracking devices
          - Activity monitors

          Telehealth Platforms:
          Virtual healthcare delivery has become increasingly sophisticated:
          - Video consultations
          - Remote diagnostic capabilities
          - Secure messaging systems
          - Digital prescription management
          - Online appointment scheduling

          Smart Home Integration:

          Automated Systems:
          - Medication reminders and dispensers
          - Fall detection systems
          - Emergency response systems
          - Environmental controls
          - Voice-activated assistance

          Safety Features:
          - Motion sensors
          - Security cameras
          - Smart locks
          - Automated lighting
          - Temperature monitoring

          Mobile Health Applications:

          Types of Apps:
          - Medication management
          - Symptom tracking
          - Exercise monitoring
          - Nutrition planning
          - Mental health support

          Benefits:
          - Improved medication adherence
          - Better health tracking
          - Enhanced communication
          - Increased patient engagement
          - Real-time health insights

          Artificial Intelligence in Home Healthcare:

          Predictive Analytics:
          - Early warning systems
          - Health trend analysis
          - Risk assessment
          - Treatment optimization
          - Resource allocation

          Virtual Assistants:
          - Care reminders
          - Health monitoring
          - Emergency detection
          - Routine task automation
          - Communication facilitation

          Future Developments:

          Upcoming Innovations:
          - Wearable diagnostic devices
          - Smart implants
          - Robot assistants
          - Virtual reality therapy
          - Personalized AI health coaches

          Implementation Considerations:

          Key Factors:
          - Cost considerations
          - User-friendliness
          - Technical support availability
          - Data security measures
          - Integration capabilities

          Conclusion:

          Healthcare technology continues to evolve, making home healthcare more effective and accessible. Understanding and adopting these innovations can significantly improve patient care outcomes and quality of life.
        `
      }
    };

    setPost(mockPosts[slug]);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <PostContainer>
      <BackButtonContainer>
        <BackButton onClick={handleBack}>← Back to Articles</BackButton>
      </BackButtonContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{post.date}</PostDate>
      <PostContent dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
    </PostContainer>
  );
};

export default BlogPost; 
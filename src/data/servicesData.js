// src/data/servicesData.js
// Complete service dataset for all treatments (spine, brain, bone)
// Each entry is designed for patient-friendly readability and integration with TreatmentPage

export const servicesData = {
  // Dr Achal  //waring: do not change the key 'spine' or "brain"
  // instead of Spine Treatments its now Dr Achal Gupta so do not change the key who ever you are otherwise be ready to change all imports
  spine: [
    {
      label: "Slip Disc Surgery",
      to: "/treatments/slipped-disc-surgery",
      banner: "/assets/banner/slip-disc-surgery.jpg",
      image: "/assets/treatmentPhotos/slipped-disc-surgery.jpg",
      description:
        "A slipped disc occurs when the cushion between spinal bones bulges out or ruptures, pressing on nearby nerves. Surgery removes or repairs the disc to relieve pain, restore movement, and prevent further nerve damage. Minimally invasive techniques ensure faster healing, minimal scars, and quicker return to daily life.",
      commonConditions: [
        "Herniated Discs",
        "Sciatica",
        "Nerve Compression",
        "Chronic Back Pain",
      ],
      treatmentOptions: {
        nonSurgical:
          "Physical therapy, medications, rest, and posture correction exercises.",
        surgical:
          "Endoscopic discectomy, microdiscectomy, or spinal fusion for severe compression.",
      },
    },
    {
      label: "Cervical Spondylosis",
      to: "/treatments/cervical-spondylosis",
      banner: "/assets/banner/Cervical-spondylosis.png",
      image: "/assets/treatmentPhotos/cervical-spondylosis.jpg",
      description:
        "Cervical spondylosis is age-related degeneration of the neck bones and discs. It can cause stiffness, pain, and tingling in the shoulders and arms due to nerve compression. Treatment focuses on pain relief, posture correction, and, in advanced cases, surgical decompression for long-term relief.",
      commonConditions: [
        "Neck Pain",
        "Shoulder Weakness",
        "Arm Numbness",
        "Cervical Disc Disease",
      ],
      treatmentOptions: {
        nonSurgical:
          "Physiotherapy, anti-inflammatory drugs, neck support, and stretching exercises.",
        surgical:
          "Cervical decompression or fusion to relieve pressure and stabilize the spine.",
      },
    },
    {
      label: "Spondylolisthesis",
      to: "/treatments/spondylolisthesis",
      banner: "/assets/banner/Spondylolisthesis.jpg",
      image: "/assets/treatmentPhotos/spondylolisthesis.jpg",
      description:
        "Spondylolisthesis happens when one vertebra slips forward over another, leading to back pain and nerve pressure. The aim of surgery is to realign the vertebrae, restore stability, and relieve pain. Modern fixation techniques ensure a safe and durable outcome with minimal downtime.",
      commonConditions: [
        "Slipped Vertebra",
        "Lower Back Pain",
        "Leg Pain",
        "Spinal Instability",
      ],
      treatmentOptions: {
        nonSurgical:
          "Bracing, posture training, pain management, and core-strengthening exercises.",
        surgical:
          "Spinal fusion using rods and screws or minimally invasive stabilization.",
      },
    },
    {
      label: "Endoscopic Spine Surgery",
      to: "/treatments/endoscopic-spine-surgery",
      banner: "/assets/banner/Endoscopic-spine-surgery.jpg",// updated banner path
      image: "/assets/treatmentPhotos/endoscopic-spine.png",
      description:
        "Endoscopic spine surgery uses a small camera and precise tools to correct spinal problems through a tiny incision. This modern approach minimizes tissue damage, reduces hospital stay, and ensures a quicker return to work and normal activities with minimal discomfort.",
      commonConditions: [
        "Disc Herniation",
        "Lumbar Canal Stenosis",
        "Sciatica",
        "Degenerative Spine Disease",
      ],
      treatmentOptions: {
        nonSurgical:
          "Medications, physiotherapy, and activity modification for early cases.",
        surgical:
          "Endoscopic discectomy, foraminotomy, or decompression through small incisions.",
      },
    },
    {
      label: "Minimally Invasive Spine Surgery",
      to: "/treatments/minimally-invasive-spine-surgery",
      banner: "/assets/banner/Minimally-invasive-spine-surgery.jpg",
      image: "/assets/treatmentPhotos/Minimally-invasive-spine-surgery.png",
      description:
        "This advanced surgical approach treats spine problems through tiny cuts using specialized instruments. It reduces blood loss, postoperative pain, and muscle damage, allowing patients to recover quickly while maintaining spinal strength and stability.",
      commonConditions: [
        "Lumbar Canal Stenosis",
        "Herniated Discs",
        "Spine Fractures",
        "Spinal Instability",
      ],
      treatmentOptions: {
        nonSurgical:
          "Physiotherapy, core stabilization, and guided exercise routines.",
        surgical:
          "Discectomy, laminotomy, or spinal fusion using navigation-guided systems.",
      },
    },
    {
      label: "Tuberculosis of Spine",
      to: "/treatments/tuberculosis-of-spine",
      banner: "/assets/banner/Tuberculosis-of-spine.jpg",
      image: "/assets/treatmentPhotos/spinal-tb.jpg",
      description:
        "Spinal tuberculosis (Pott’s disease) can weaken the spine and compress nerves, causing deformity and paralysis if untreated. Combined medical and surgical care removes infection, stabilizes the spine, and restores function for a pain-free, active life.",
      commonConditions: [
        "Pott’s Spine",
        "Chronic Back Pain",
        "Spinal Deformity",
      ],
      treatmentOptions: {
        nonSurgical:
          "Anti-tubercular medications and nutritional therapy.",
        surgical:
          "Debridement and stabilization through minimally invasive spine fusion.",
      },
    },
    {
      label: "Pediatric Spine Surgery",
      to: "/treatments/pediatric-spine-surgery",
      banner: "/assets/images/pediatric-spine-banner.jpg",
      image: "/assets/treatmentPhotos/pediatric-spine.jpg",
      description:
        "Children with spine deformities or birth defects may need corrective surgery. Pediatric spine surgery focuses on safe realignment, improving growth and posture, and preventing long-term complications. Each plan is personalized to ensure a gentle recovery.",
      commonConditions: [
        "Scoliosis",
        "Spinal Deformity",
        "Birth Defects",
      ],
      treatmentOptions: {
        nonSurgical:
          "Bracing, physiotherapy, and growth monitoring.",
        surgical:
          "Spinal correction and fixation for deformity or instability.",
      },
    },
    {
      label: "Lumbar Spondylosis",
      to: "/treatments/lumbar-spondylosis",
      banner: "/assets/banner/Lumbar-spondylosis.jpg",
      image: "/assets/treatmentPhotos/lumbar-spondylosis.jpg",
      description:
        "Lumbar spondylosis is the natural wear and tear of the lower spine due to age or heavy physical activity. It causes back pain, stiffness, and sometimes leg pain. Treatment focuses on mobility restoration and pain control for a better quality of life.",
      commonConditions: [
        "Degenerative Disc Disease",
        "Chronic Back Pain",
        "Stiffness",
      ],
      treatmentOptions: {
        nonSurgical:
          "Physiotherapy, pain relief medication, and posture correction.",
        surgical:
          "Minimally invasive decompression or fusion for severe cases.",
      },
    },
    {
      label: "Fracture Management",
      to: "/treatments/fracture-management",
      banner: "/assets/images/fracture-banner.jpg",
      image: "/assets/treatmentPhotos/fracture.jpg",
      description:
        "Fracture management involves aligning and stabilizing broken bones using advanced orthopedic techniques. Depending on severity, it can include splints, plates, or rods to restore strength, speed healing, and ensure proper bone alignment.",
      commonConditions: ["Trauma Fractures", "Sports Injuries", "Bone Breaks"],
      treatmentOptions: {
        nonSurgical: "Casts, braces, and physiotherapy.",
        surgical: "Open reduction with internal or external fixation devices.",
      },
    },
    {
      label: "Brain & Spine Tumor Surgery",
      to: "/treatments/brain-tumor-surgery",
      banner: "/assets/banner/spine-tumor.jpg",
      image: "/assets/treatmentPhotos/spine-tumor.webp",
      description:
        "Brain tumor surgery removes abnormal tissue growths while preserving brain function. With advanced neuro-navigation and precision microsurgery, the procedure ensures safety and optimal recovery for both benign and malignant tumors.",
      commonConditions: [
        "Meningioma",
        "Glioma",
        "Acoustic Neuroma",
        "Pituitary Tumor",
      ],
      treatmentOptions: {
        nonSurgical: "Medication, radiation therapy, or chemotherapy.",
        surgical:
          "Microsurgical resection, endoscopic removal, or neuronavigation-guided surgery.",
      },
    },
  ],

  // Dr Konika Bansal
  brain: [
    {
      label: "Child Epilepsy & Epilepsy Syndrome",
      to: "/treatments/epilepsy",
      banner: "/assets/banner/Child-Epilepsy.jpg",
      image: "/assets/treatmentPhotos/epilepsy-banner.jpg",
      description:
        "Epilepsy affects every child differently depending on age, seizure type, response to treatment, and associated medical conditions. Some children achieve excellent control with medication, while others may face long-term seizure challenges. Seizures occur due to abnormal electrical activity in the brain and, although usually brief, can be frightening for families.",

      commonConditions: [
        "Staring spells / unresponsiveness",
        "Loss of awareness",
        "Sudden rhythmic arm and leg movements",
        "Body stiffening",
        "Breathing disturbances",
        "Unexplained falls",
        "Head nodding or jerking",
        "Rapid blinking episodes",
        "Unusual or out-of-place behaviours"
      ],

      treatmentOptions: {
        nonSurgical:
          "Medication therapy, lifestyle modification, seizure precautions, and long-term monitoring with EEG or VEEG.",
        surgical:
          "Advanced evaluation for drug-resistant epilepsy including MRI-based localization, genetic testing, and potential surgical interventions depending on seizure origin."
      }
    },

        {
      label: "Encephalopathy / Encephalitis",
      to: "/treatments/encephalopathy-encephalitis",
      banner: "/assets/banner/encephalitis.jpg",
      image: "/assets/treatmentPhotos/encephalopathy.jpg",

      description:
        "Encephalitis refers to inflammation of the membranes surrounding the brain and spinal cord. This swelling affects brain function and can lead to neurological changes such as irritability, altered mental state, and seizures. Inflammation may be caused by viruses, bacteria, or parasites, and can significantly impact a child’s neurological status.",

      commonConditions: [
        "Fever",
        "Headache",
        "Sensitivity to light",
        "Neck stiffness",
        "Excessive sleepiness",
        "Irritability",
        "Seizures",
        "Skin rashes",
        "Difficulty speaking or speech changes"
      ],

      treatmentOptions: {
        nonSurgical:
          "Antiviral or antibiotic medications based on cause, supportive care, fever control, hydration therapy, anti-seizure medications, and close neurological monitoring.",

        surgical:
          "Surgical intervention is rarely required but may be considered for complications such as severe brain swelling, abscess formation, or increased intracranial pressure requiring neurosurgical drainage."
      }
    },

    {
      label: "Cerebral Palsy",
      to: "/treatments/cerebral-palsy",
      banner: "/assets/banner/cerebral-palsy.jpg",
      image: "/assets/treatmentPhotos/Cerebral-Palsy.jpg",

      description:
        "Cerebral palsy (CP) is a group of disorders that affect movement, muscle tone, balance, and posture. It is the most common motor disability in childhood. CP occurs due to abnormal brain development or injury to the developing brain—usually before or during birth—affecting a child's ability to control muscles and coordinate movement.",

      commonConditions: [
        "Muscle weakness",
        "Stiff muscles or spasticity",
        "Difficulty with balance and posture",
        "Delayed motor milestones",
        "Involuntary movements",
        "Trouble coordinating movement",
        "Abnormal muscle tone",
        "Difficulty walking",
        "Speech difficulties"
      ],

      treatmentOptions: {
        nonSurgical:
          "Physiotherapy, occupational therapy, speech therapy, muscle relaxant medications, management of spasticity (including Botox therapy), orthotic devices, early intervention programs, and treatment for associated conditions such as seizures or feeding issues.",

        surgical:
          "Orthopedic surgeries for tendon release or correction of deformities, selective dorsal rhizotomy for severe spasticity, and neurosurgical procedures when needed based on functional limitations."
      }
    },

    {
      label: "Neurocysticercosis",
      to: "/treatments/neurocysticercosis",
      banner: "/assets/banner/neurocysticercosis.jpg",
      image: "/assets/treatmentPhotos/neurocysticercosis.jpg",

      description:
        "Neurocysticercosis is a neurological disease caused by the parasitic tapeworm Taenia solium invading the central nervous system. It is the most common parasitic infection affecting the brain. The condition develops when the parasite's larvae accumulate in the muscles, eyes, skin, and especially the brain, leading to seizures and various neurological symptoms.",

      commonConditions: [
        "Seizures",
        "Headaches",
        "Neurological deficits",
        "Hydrocephalus (fluid buildup in the brain)",
        "Behavioral changes",
        "Visual disturbances",
        "Raised intracranial pressure",
        "Muscle or skin cysts"
      ],

      treatmentOptions: {
        nonSurgical:
          "Anti-parasitic medications such as albendazole and praziquantel (PZQ), anti-seizure medications for seizure control, and steroid therapy to reduce inflammation during cyst degeneration. Diagnosis is typically confirmed through CT scan, MRI, and serological tests such as ELISA or immunoblotting.",

        surgical:
          "Surgical removal of cysts in selected cases, including large parenchymal cysts, intraventricular cysts, or instances causing hydrocephalus. Neurosurgical intervention may also be required to relieve intracranial pressure."
      }
    },

    {
      label: "ADHD (Attention Deficit Hyperactivity Disorder)",
      to: "/treatments/adhd",
      banner: "/assets/banner/adhd.jpg",
      image: "/assets/treatmentPhotos/ADHD.jpg",

      description:
        "ADHD is a common childhood behavioural disorder that affects a child’s ability to focus, organize, and complete tasks. Children with ADHD may appear impulsive, easily distracted, or overly active. Although many children show such behaviours occasionally, ADHD is different because the symptoms are persistent, interfere with daily functioning, and affect academic performance, behaviour, and social relationships. ADHD can be predominantly inattentive, predominantly hyperactive-impulsive, or a combined type.",

      commonConditions: [
        "Difficulty focusing or maintaining attention",
        "Hyperactivity or constant movement",
        "Impulsive behaviour without thinking",
        "Trouble organizing tasks",
        "Easily distracted",
        "Poor academic performance",
        "Difficulty forming or maintaining friendships",
        "Low self-esteem due to behavioural struggles"
      ],

      treatmentOptions: {
        nonSurgical:
          "Behaviour therapy, parent training programs, classroom intervention strategies, structured routines, counselling, and medications such as stimulants or non-stimulants when required. Early identification and supportive measures help improve academic, behavioural, and social functioning.",

        surgical:
          "No surgical treatment is required for ADHD. Management focuses on behavioural therapy, medication, and structured support systems."
      }
    },

    {
      label: "Child Stroke",
      to: "/treatments/child-stroke",
      banner: "/assets/banner/stroke-banner.jpg",
      image: "/assets/treatmentPhotos/childStroke.jpg",

      description:
        "Pediatric stroke is a rare but serious condition affecting newborns and older children. It occurs when blood flow to part of the brain is disrupted (ischemic stroke) or when bleeding occurs within the brain (hemorrhagic stroke). Both types cause damage to nearby brain tissue and can lead to long-term neurological challenges. Early recognition and treatment are essential as outcomes and therapy differ from adults.",

      commonConditions: [
        "Weakness or numbness on one side of the body",
        "Slurred speech or language difficulty",
        "Trouble balancing or walking",
        "Vision problems such as double vision or vision loss",
        "Sudden lethargy or drowsiness",
        "Seizures or abnormal rhythmic movements"
      ],

      treatmentOptions: {
        nonSurgical:
          "Immediate medical stabilization, clot-busting medications for eligible ischemic stroke cases, seizure control, blood-thinning medication when necessary, sickle-cell disease management, physical therapy, speech therapy, and rehabilitation to restore motor and cognitive function.",

        surgical:
          "Surgical intervention may be required for hemorrhagic stroke, including procedures to relieve pressure from bleeding, repair abnormal blood vessels, or treat hydrocephalus. Specialized neurosurgical care may be needed depending on stroke type and severity."
      }
    },

    {
      label: "Genetic Disorders",
      to: "/treatments/genetic-disorders",
      banner: "/assets/banner/genetic-disorders.jpg",
      image: "/assets/treatmentPhotos/genetic-disorders.jpg",

      description:
        "Genetic disorders occur when a mutation (pathogenic variant) affects the structure or function of genes, or when there is an abnormal amount of genetic material. Genes, made of DNA, carry instructions for how cells function and determine an individual's unique characteristics. Mutations may be inherited from one or both parents, or arise spontaneously due to DNA changes. Genetic disorders may present at birth or develop later in life, depending on the type and severity of the mutation.",

      commonConditions: [
        "Chromosomal abnormalities (missing or duplicated chromosomes)",
        "Single-gene or monogenic disorders",
        "Multifactorial genetic conditions",
        "Developmental delays",
        "Physical or structural abnormalities",
        "Learning difficulties",
        "Behavioral challenges",
        "Metabolic complications depending on disorder type"
      ],

      treatmentOptions: {
        nonSurgical:
          "Genetic counseling, early intervention programs, developmental therapy, speech/occupational therapy, medications for symptom management, metabolic control where required, lifestyle modifications, and regular follow-up with pediatric neurologists and genetic specialists.",

        surgical:
          "Surgical treatment is condition-specific and may be required for structural abnormalities or complications arising from certain genetic conditions. Not all genetic disorders require surgery; management is primarily supportive and multidisciplinary."
      }
    },

    {
      label: "Global Developmental Delay",
      to: "/treatments/global-developmental-delay",
      banner: "/assets/banner/global-developmental-delay.jpg",
      image: "/assets/treatmentPhotos/Global-Developmental-Delay.jpg",

      description:
        "Global developmental delay refers to a child not achieving development milestones appropriate for their age in two or more areas, such as motor skills, speech and language, cognitive development, social interaction, or play skills. These delays may be mild, moderate, or severe and can affect a child's ability to learn, communicate, and interact with others. Early evaluation and intervention are crucial for improving long-term outcomes.",

      commonConditions: [
        "Delayed motor skills (sitting, crawling, walking)",
        "Delayed speech or language development",
        "Poor social interaction or play skills",
        "Cognitive or learning difficulties",
        "Trouble following instructions",
        "Behavioral challenges",
        "Difficulty problem-solving",
        "Feeding or sensory issues"
      ],

      treatmentOptions: {
        nonSurgical:
          "Early intervention therapy, physiotherapy, occupational therapy, speech therapy, behavioral therapy, nutritional support, developmental stimulation programs, and treatment of underlying conditions such as metabolic or genetic disorders. Regular pediatric neurologic evaluation is essential.",

        surgical:
          "Surgery is not typically required for developmental delay itself. However, if an underlying structural brain abnormality or medical condition is identified, specific surgical treatment may be considered based on the child’s diagnosis."
      }
    },

    {
      label: "Headache Treatment",
      to: "/treatments/headache",
      banner: "/assets/banner/headache.jpg",
      image: "/assets/treatmentPhotos/Headaches.jpg",

      description:
        "Headaches are common in children and are usually harmless, but some children experience severe or recurring headaches that affect daily activities. In rare cases, headaches may be a sign of an underlying medical condition. Early evaluation helps identify whether the headache is primary or secondary. Primary headaches include migraine and tension-type headaches, while secondary headaches arise due to another medical issue and must be treated accordingly.",

      commonConditions: [
        "Recurrent migraines",
        "Tension-type headaches",
        "Sinus-related headaches",
        "Headaches from infections like flu or fever",
        "Stress or anxiety-related headaches",
        "Headaches associated with depression",
        "Headaches due to sleep deprivation or fatigue",
        "Headaches linked to serious conditions (meningitis, encephalitis, hemorrhage, tumors)"
      ],

      treatmentOptions: {
        nonSurgical:
          "Detailed clinical evaluation, lifestyle management, stress reduction, hydration and sleep optimization, treatment for underlying conditions such as sinusitis or infections, medication for pain and migraine prevention, counseling for anxiety or depression, and avoidance of known triggers.",

        surgical:
          "Surgery is rarely required for headaches. It is only considered when headaches are secondary to serious neurological conditions such as tumors, hydrocephalus, or vascular abnormalities. Surgical treatment is directed at the underlying cause, not the headache itself."
      }
    },

    {
      label: "Botox Therapy in Dystonia",
      to: "/treatments/botox-therapy-dystonia",
      banner: "/assets/banner/botox-dystonia.jpg",
      image: "/assets/treatmentPhotos/Botox-Therapy-in-Dystonia.jpg",

      description:
        "Botulinum neurotoxin therapy is a targeted treatment used to reduce symptoms of dystonia by relaxing overactive muscles. The therapy uses Botulinum Neurotoxin (BNT), a biologically derived agent from the bacterium Clostridium botulinum. When injected into specific muscles, it decreases excessive muscle contractions by blocking the chemical signals responsible for muscle activation. Despite the word 'toxin,' this treatment is safe, effective, and widely used in medical practice.",

      commonConditions: [
        "Focal dystonia",
        "Generalized dystonia",
        "Muscle spasms",
        "Involuntary muscle contractions",
        "Neck dystonia (cervical dystonia)",
        "Eye blinking spasms (blepharospasm)",
        "Limb dystonia",
        "Spasticity in neurological conditions"
      ],

      treatmentOptions: {
        nonSurgical:
          "Targeted botulinum neurotoxin injections into overactive muscles, physiotherapy, medications to manage muscle stiffness, and regular follow-up for dose adjustments. BNT blocks neurotransmitter release, allowing muscles to relax and reducing excessive movements.",

        surgical:
          "Surgery is rarely needed for dystonia today due to the effectiveness of BNT. In severe or generalized cases that do not respond to injections, neurosurgical options such as deep brain stimulation may be considered."
      }
    },

    {
      label: "Muscular Dystrophy & Myopathy",
      to: "/treatments/muscular-dystrophy-myopathy",
      banner: "/assets/banner/muscle-disorder.jpg",
      image: "/assets/treatmentPhotos/Muscular-Dystrophy-and-Myopathy.png",
      description:
        "Muscular Dystrophy and Myopathy are muscle disorders that weaken the body's muscles over time. Muscular Dystrophy is primarily genetic and leads to progressive muscle degeneration, while Myopathy refers to a broader group of muscle diseases that may be genetic, inflammatory, metabolic, or medication-induced. These conditions affect mobility, muscle strength, and daily physical function.",
      commonConditions: [
        "Progressive muscle weakness",
        "Difficulty walking or climbing stairs",
        "Muscle fatigue",
        "Abnormal muscle tone",
        "Frequent falls"
      ],
      treatmentOptions: {
        nonSurgical:
          "Physiotherapy to maintain movement, stretching and strengthening exercises, occupational therapy, orthotic support, nutritional guidance, and medications such as steroids or immunosuppressants in specific myopathies.",
        surgical:
          "Surgery is rare but may be required for tendon release, scoliosis correction, or complications arising from muscle weakness such as contractures."
      }
    },

    {
      label: "Metabolic Syndrome",
      to: "/treatments/metabolic-syndrome",
      banner: "/assets/banner/metabolic-syndrome.jpg",
      image: "/assets/treatmentPhotos/Metabolic-Disease.jpg",

      description:
        "Metabolic syndrome is a group of conditions that occur together, significantly increasing the risk of heart disease, stroke, and type 2 diabetes. These conditions include high blood pressure, elevated blood sugar, excess abdominal fat, and abnormal cholesterol or triglyceride levels. Having just one of these factors doesn't mean you have metabolic syndrome, but it does increase the risk of serious long-term health problems. As more of these conditions develop, the chances of complications such as diabetes and cardiovascular disease rise substantially.",

      commonConditions: [
        "High blood pressure",
        "High fasting blood sugar",
        "Increased body fat around the waist",
        "Abnormal cholesterol levels",
        "High triglycerides",
        "Insulin resistance"
      ],

      treatmentOptions: {
        nonSurgical:
          "Lifestyle modifications including weight reduction, increased physical activity, healthy diet changes, reducing sugar and refined carbohydrates, quitting smoking, and controlling blood pressure, cholesterol, and blood sugar through medications if needed.",

        surgical:
          "Bariatric surgery may be considered in severely obese patients who do not improve with lifestyle changes and medications. Surgery aims to reduce weight and improve metabolic function."
      }
    },
  ],
};
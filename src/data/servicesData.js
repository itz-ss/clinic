// src/data/servicesData.js
// Complete service dataset for all treatments (spine, brain, bone)
// Each entry is designed for patient-friendly readability and integration with TreatmentPage

export const servicesData = {
  
  //waring: do not change the key 'spine'
  // instead of Spine Treatments its now Dr Achal Gupta so do not change the key who ever you are otherwise be ready to change all imports
  spine: [
    {
      label: "Slipped Disc Surgery",
      to: "/treatments/slipped-disc-surgery",
      banner: "/assets/banner/slipped-disc-surgery.jpg",
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
      banner: "/assets/banner/Cervical-spondylosis.jpg",
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
      banner: "/assets/banner/Endoscopic spine surgery.jpg",// updated banner path
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
      label: "Joint Replacement Surgery",
      to: "/treatments/joint-replacement-surgery",
      banner: "/assets/images/joint-replacement-banner.jpg",
      image: "/assets/treatmentPhotos/joint-replacement.jpg",
      description:
        "Joint replacement replaces damaged knee or hip joints with artificial implants to restore mobility and relieve pain. The surgery ensures stable alignment and natural joint movement, with excellent long-term results after rehabilitation.",
      commonConditions: ["Arthritis", "Osteoarthritis", "Joint Pain"],
      treatmentOptions: {
        nonSurgical:
          "Pain control, exercise therapy, and supportive aids.",
        surgical:
          "Knee or hip replacement using high-precision prosthetics.",
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
  ],

  brain: [
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
    {
      label: "Stroke Treatment",
      to: "/treatments/stroke",
      banner: "/assets/images/stroke-banner.jpg",
      image: "/assets/treatmentPhotos/stroke.webp",
      description:
        "A stroke occurs when blood supply to part of the brain is interrupted, leading to sudden weakness or speech problems. Prompt treatment restores blood flow and prevents brain damage, followed by personalized rehabilitation to regain daily function.",
      commonConditions: ["Ischemic Stroke", "Hemorrhagic Stroke"],
      treatmentOptions: {
        nonSurgical:
          "Clot-dissolving medications, blood pressure control, and physiotherapy.",
        surgical:
          "Thrombectomy or aneurysm clipping for bleeding control and circulation restoration.",
      },
    },
    {
      label: "Epilepsy Surgery",
      to: "/treatments/epilepsy",
      banner: "/assets/images/epilepsy-banner.jpg",
      image: "/assets/treatmentPhotos/epilepsy.jpg",
      description:
        "Epilepsy causes seizures due to abnormal brain activity. When medications fail, surgery helps target the exact brain area causing seizures. This significantly improves quality of life and reduces dependence on drugs.",
      commonConditions: [
        "Drug-resistant Epilepsy",
        "Temporal Lobe Epilepsy",
        "Seizure Disorders",
      ],
      treatmentOptions: {
        nonSurgical: "Medication and behavioral management.",
        surgical:
          "Focal resection, neurostimulator implantation, or laser ablation therapy.",
      },
    },
    {
      label: "Migraine and Headache Treatment",
      to: "/treatments/migraine",
      banner: "/assets/images/migraine-banner.jpg",
      image: "/assets/treatmentPhotos/migraine.jpg",
      description:
        "Chronic migraine affects concentration and quality of life. Treatment focuses on trigger control, medication, and lifestyle changes to prevent attacks. In resistant cases, nerve stimulation may offer long-term relief.",
      commonConditions: ["Chronic Migraine", "Tension Headache"],
      treatmentOptions: {
        nonSurgical:
          "Medication, stress control, and dietary modifications.",
        surgical:
          "Nerve decompression or stimulation for drug-resistant migraines.",
      },
    },
  ],
};
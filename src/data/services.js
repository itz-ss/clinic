const services = [
  {
    component: "MinimallyInvasive",
    title: "Minimally Invasive Spine Surgery",
    slug: "minimally-invasive-spine-surgery",
    description:
      "This procedure is used to treat various spine problems including herniated discs, spinal stenosis, and degenerative disc disease. It involves making small incisions to minimize muscle disruption. The goal is less pain, shorter hospital stays, and quicker recovery.",
    commonConditions: [
      "Herniated Discs",
      "Lumbar Canal Stenosis",
      "Degenerative Disc Disease",
      "Spondylolisthesis",
    ],
    treatments: {
      nonSurgical:
        "Physical therapy, medications, exercise, and lifestyle adjustments.",
      surgical:
        "Minimally invasive procedures like discectomy, laminoforaminotomy, and spinal fusion.",
    },
  },
  {
    component: "Endoscopic",
    title: "Endoscopic Spine Surgery",
    slug: "endoscopic-spine-surgery",
    description:
      "Endoscopic spine surgery uses a tiny camera and instruments to remove disc fragments or relieve pressure on nerves with minimal tissue damage.",
    commonConditions: [
      "Herniated Discs",
      "Sciatica",
      "Spinal Stenosis",
      "Disc Prolapse",
    ],
    treatments: {
      nonSurgical: "Pain management, physiotherapy, and lifestyle changes.",
      surgical:
        "Endoscopic discectomy, decompression, and foraminotomy procedures.",
    },
  },
  {
    component: "Scoliosis",
    title: "Scoliosis and Spinal Deformity Surgery",
    slug: "scoliosis-and-spinal-deformity-surgery",
    description:
      "This treatment focuses on correcting spinal curvature and restoring balance and alignment for better function and posture.",
    commonConditions: [
      "Idiopathic Scoliosis",
      "Kyphosis",
      "Post-traumatic Deformity",
      "Congenital Deformity",
    ],
    treatments: {
      nonSurgical: "Bracing, physical therapy, and regular monitoring.",
      surgical: "Spinal fusion and correction using modern instrumentation.",
    },
  },
  {
    component: "Cervical",
    title: "Cervical Spine and Craniovertebral Junction Surgery",
    slug: "cervical-spine-and-craniovertebral-junction",
    description:
      "Focused on treating cervical spine instability, disc herniation, and craniovertebral junction abnormalities.",
    commonConditions: [
      "Cervical Disc Prolapse",
      "Atlantoaxial Instability",
      "Cervical Myelopathy",
      "Neck Pain",
    ],
    treatments: {
      nonSurgical: "Neck support, medications, and physiotherapy.",
      surgical: "Cervical discectomy, fusion, and decompression surgeries.",
    },
  },
];

export default services;
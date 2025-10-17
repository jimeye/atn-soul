import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Users, Calendar, MapPin, Music2, Star, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Co-Productions - Collaborations Musicales",
  description: "Découvrez nos co-productions et collaborations avec des artistes internationaux.",
}

const collaborations = [
  {
    id: "1",
    title: "Paris Jazz Collective",
    artist: "ATN Soul + Jazz Ensemble",
    description: "Une collaboration unique entre ATN Soul et le célèbre ensemble de jazz parisien.",
    image: "/images/collab1.jpg",
    date: "2024",
    location: "Paris, France",
    genre: "Jazz Fusion",
    status: "En cours",
  },
  {
    id: "2",
    title: "Brooklyn Sessions",
    artist: "ATN Soul + NYC Musicians",
    description: "Une série de sessions d'enregistrement avec des musiciens new-yorkais.",
    image: "/images/collab2.jpg",
    date: "2023",
    location: "Brooklyn, NYC",
    genre: "Soul/R&B",
    status: "Terminé",
  },
  {
    id: "3",
    title: "London Calling",
    artist: "ATN Soul + British Artists",
    description: "Une collaboration avec des artistes britanniques pour un album spécial.",
    image: "/images/collab3.jpg",
    date: "2024",
    location: "Londres, UK",
    genre: "Alternative Soul",
    status: "En préparation",
  },
  {
    id: "4",
    title: "Tokyo Nights",
    artist: "ATN Soul + Japanese Musicians",
    description: "Une fusion unique entre soul occidentale et musique traditionnelle japonaise.",
    image: "/images/collab4.jpg",
    date: "2024",
    location: "Tokyo, Japon",
    genre: "World Music",
    status: "En cours",
  },
  {
    id: "5",
    title: "Berlin Electronic",
    artist: "ATN Soul + Electronic Artists",
    description: "Une exploration de la musique électronique avec des artistes berlinois.",
    image: "/images/collab5.jpg",
    date: "2023",
    location: "Berlin, Allemagne",
    genre: "Electronic Soul",
    status: "Terminé",
  },
  {
    id: "6",
    title: "Rio Soul",
    artist: "ATN Soul + Brazilian Musicians",
    description: "Une fusion de soul et de bossa nova avec des musiciens brésiliens.",
    image: "/images/collab6.jpg",
    date: "2024",
    location: "Rio de Janeiro, Brésil",
    genre: "Bossa Soul",
    status: "En préparation",
  },
]

const partners = [
  {
    name: "Blue Note Records",
    logo: "/images/partner1.png",
    description: "Label de jazz légendaire",
  },
  {
    name: "Sony Music",
    logo: "/images/partner2.png",
    description: "Major internationale",
  },
  {
    name: "Jazz Foundation",
    logo: "/images/partner3.png",
    description: "Fondation pour la musique jazz",
  },
  {
    name: "Universal Music",
    logo: "/images/partner4.png",
    description: "Label international",
  },
]

export default function CoProductionsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <Image
            src="/images/co-productions-hero.jpg"
            alt="Co-Productions"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-title text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Co-{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Productions
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Découvrez nos collaborations et co-productions avec des artistes 
              et labels internationaux pour créer des expériences musicales uniques.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="xl" className="group">
                <Users className="mr-2 h-5 w-5" />
                Découvrir les collaborations
              </Button>
              <Button variant="glass" size="xl">
                Nous contacter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collaborations Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-title mb-4">
              Nos Collaborations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos projets de co-production avec des artistes du monde entier.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={collab.image}
                      alt={collab.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        collab.status === 'Terminé' ? 'bg-green-500/20 text-green-400' :
                        collab.status === 'En cours' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {collab.status}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-title group-hover:text-primary transition-colors">
                      {collab.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {collab.artist}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {collab.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{collab.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{collab.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Music2 className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{collab.genre}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 group">
                      En savoir plus
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-title mb-4">
              Nos Partenaires
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous collaborons avec des labels et institutions musicales de renommée internationale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="h-16 flex items-center justify-center mb-4">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg font-title">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {partner.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-title mb-6">
              Intéressé par une Collaboration ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nous sommes toujours ouverts à de nouvelles collaborations 
              et partenariats créatifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glassDark" size="xl">
                Proposer un projet
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Nous contacter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

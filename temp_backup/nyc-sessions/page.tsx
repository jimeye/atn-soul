import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Calendar, MapPin, Users, Music2, Star, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "NYC Sessions - Performance Live",
  description: "Découvrez 'NYC Sessions', une performance live exceptionnelle capturée dans l'énergie vibrante de New York.",
}

const tracks = [
  { title: "Midnight in Manhattan", duration: "4:32", genre: "Jazz Fusion" },
  { title: "Brooklyn Nights", duration: "5:18", genre: "Soul" },
  { title: "Central Park Dreams", duration: "6:45", genre: "Ambient Jazz" },
  { title: "Harlem Groove", duration: "4:12", genre: "Funk" },
  { title: "Queens Boulevard", duration: "5:30", genre: "R&B" },
  { title: "Staten Island Sunset", duration: "7:22", genre: "Smooth Jazz" },
]

const musicians = [
  { name: "Marcus Johnson", instrument: "Piano & Synth", image: "/images/musician1.jpg" },
  { name: "Sarah Williams", instrument: "Saxophone", image: "/images/musician2.jpg" },
  { name: "David Chen", instrument: "Bass", image: "/images/musician3.jpg" },
  { name: "Lisa Rodriguez", instrument: "Drums", image: "/images/musician4.jpg" },
  { name: "James Thompson", instrument: "Guitare", image: "/images/musician5.jpg" },
]

export default function NYCSessionsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <Image
            src="/images/nyc-sessions-hero.jpg"
            alt="NYC Sessions"
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
              NYC{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Sessions
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Une performance live exceptionnelle capturée dans l'énergie vibrante 
              de New York, où jazz, soul et R&B se rencontrent pour créer une 
              expérience musicale unique.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Écouter la performance
              </Button>
              <Button variant="glass" size="xl">
                Voir les photos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Performance Details */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-title mb-6">
                À propos de la Performance
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Enregistrée dans un studio historique de Brooklyn, NYC Sessions 
                  capture l'essence même de la scène musicale new-yorkaise. Cette 
                  performance live réunit des musiciens de renommée internationale 
                  pour une session d'enregistrement unique.
                </p>
                <p>
                  Chaque morceau raconte une histoire différente de la ville qui 
                  ne dort jamais, de l'énergie électrique de Manhattan aux rythmes 
                  soul de Harlem, en passant par les mélodies jazz de Brooklyn.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Durée</div>
                    <div className="text-muted-foreground">1h 23min</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Enregistrement</div>
                    <div className="text-muted-foreground">2024</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Lieu</div>
                    <div className="text-muted-foreground">Brooklyn, NYC</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Note</div>
                    <div className="text-muted-foreground">4.9/5</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/nyc-sessions-studio.jpg"
                  alt="Studio d'enregistrement"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Track List */}
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
              Liste des Morceaux
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez chaque morceau de cette performance exceptionnelle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-title text-primary">{index + 1}</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg font-title group-hover:text-primary transition-colors">
                            {track.title}
                          </CardTitle>
                          <CardDescription className="text-primary font-medium">
                            {track.genre}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-muted-foreground font-text">
                        {track.duration}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Musicians */}
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
              Les Musiciens
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rencontrez les artistes talentueux qui ont participé à cette session.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {musicians.map((musician, index) => (
              <motion.div
                key={musician.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={musician.image}
                      alt={musician.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-title">{musician.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {musician.instrument}
                    </CardDescription>
                  </CardHeader>
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
              Vivez l'expérience NYC Sessions
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Plongez dans l'atmosphère unique de cette performance live et 
              découvrez la magie de la musique new-yorkaise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glassDark" size="xl">
                <Play className="mr-2 h-5 w-5" />
                Écouter maintenant
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Télécharger
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Heart, Share2, Download, Music2, Clock, Star, Disc3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Amarela - Album LP",
  description: "Découvrez 'Amarela', le nouvel album LP d'ATN Soul, une exploration musicale poétique et émotionnelle.",
}

const tracks = [
  { title: "Amarela", duration: "4:15", genre: "Soul", featured: false },
  { title: "Golden Hour", duration: "5:32", genre: "Jazz", featured: true },
  { title: "Midnight Blues", duration: "6:18", genre: "Blues", featured: false },
  { title: "Serenade", duration: "4:45", genre: "R&B", featured: false },
  { title: "Echoes of Love", duration: "5:12", genre: "Soul", featured: true },
  { title: "Dawn Chorus", duration: "7:23", genre: "Ambient", featured: false },
  { title: "Velvet Dreams", duration: "4:58", genre: "Jazz", featured: false },
  { title: "Whisper in the Wind", duration: "6:45", genre: "Soul", featured: false },
  { title: "Crystal Clear", duration: "5:30", genre: "R&B", featured: true },
  { title: "Amarela (Reprise)", duration: "3:42", genre: "Soul", featured: false },
]

const reviews = [
  {
    author: "Jazz Magazine",
    rating: 5,
    text: "Un album magistral qui redéfinit les frontières du soul contemporain.",
  },
  {
    author: "Music Weekly",
    rating: 5,
    text: "Amarela est une œuvre d'art musicale qui touche l'âme et émeut le cœur.",
  },
  {
    author: "Soul Review",
    rating: 4,
    text: "Une exploration poétique et émotionnelle qui restera gravée dans les mémoires.",
  },
]

export default function AmarelaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <Image
            src="/images/amarela-hero.jpg"
            alt="Amarela Album"
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
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-white mb-6 leading-tight"
            style={{ fontFamily: '"Helvetica Neue LT Std", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 900 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Amarela
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Une exploration musicale poétique et émotionnelle qui explore 
              les thèmes de l'amour, de la nostalgie et de la renaissance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Écouter l'album
              </Button>
              <Button variant="glass" size="xl">
                <Heart className="mr-2 h-5 w-5" />
                Ajouter aux favoris
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Album Details */}
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
                À propos de l'Album
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  "Amarela" est le fruit de deux années de travail intensif, 
                  une exploration musicale qui mêle soul, jazz et R&B pour 
                  créer une expérience sonore unique et émotionnelle.
                </p>
                <p>
                  Chaque morceau raconte une histoire, explore une émotion, 
                  et invite l'auditeur à un voyage intérieur profond. 
                  L'album tire son nom du mot portugais "amarela" (jaune), 
                  symbolisant la lumière, l'espoir et la renaissance.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Durée</div>
                    <div className="text-muted-foreground">58:20</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Music2 className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Morceaux</div>
                    <div className="text-muted-foreground">10 titres</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Disc3 className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Genre</div>
                    <div className="text-muted-foreground">Soul/Jazz</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Note</div>
                    <div className="text-muted-foreground">4.8/5</div>
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
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/amarela-cover.jpg"
                  alt="Couverture Amarela"
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
              Découvrez chaque morceau de cet album exceptionnel.
            </p>
          </motion.div>

          <div className="space-y-4">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-title text-primary">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-title group-hover:text-primary transition-colors">
                              {track.title}
                            </h3>
                            {track.featured && (
                              <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                                Single
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground font-text">
                            {track.genre}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-muted-foreground font-text">
                          {track.duration}
                        </span>
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
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
              Avis de la Presse
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce que disent les critiques de cet album.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-title">{review.author}</CardTitle>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-text leading-relaxed">
                      "{review.text}"
                    </p>
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
              Découvrez Amarela
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Plongez dans cet univers musical unique et laissez-vous porter 
              par les émotions d'Amarela.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glassDark" size="xl">
                <Play className="mr-2 h-5 w-5" />
                Écouter maintenant
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                <Download className="mr-2 h-5 w-5" />
                Télécharger
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                <Share2 className="mr-2 h-5 w-5" />
                Partager
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

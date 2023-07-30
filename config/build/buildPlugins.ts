import  path from 'path';
import  HTMLWebpackPlagin from 'html-webpack-plugin';
import  webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
export function buildPlagin({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlagin({
          template:paths.html,
        }),
          new webpack.ProgressPlugin(),
          new MiniCssExtractPlugin({
            filename:'css/[name].[contenthaach:8].css',
            chunkFilename:'css/[name].[contenthaach:8].css'
          }) 
    
      ]
}